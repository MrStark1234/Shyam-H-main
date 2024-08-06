const express = require("express");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const cors = require("cors");

// Replace this with the path to your service account key
const serviceAccount = require("./serviceAccountKey");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 80;

// Create a new document
app.post("/patients", async (req, res) => {
  try {
    const newPatient = req.body;
    newPatient.timestamp = admin.firestore.FieldValue.serverTimestamp();
    const docRef = await db.collection("patients").add(newPatient);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    res.status(500).json({ message: "Error adding document", error });
  }
});

// Get all documents
app.get("/patients", async (req, res) => {
  try {
    const snapshot = await db.collection("patients").get();
    const patients = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error getting documents", error });
  }
});

// Get a single document by ID
app.get("/patients/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await db.collection("patients").doc(id).get();
    if (!doc.exists) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ message: "Error getting document", error });
  }
});

// Update a document
app.put("/patients/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    await db.collection("patients").doc(id).update(updatedData);
    res.status(200).json({ message: "Document updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating document", error });
  }
});

// Delete a document
app.delete("/patients/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("patients").doc(id).delete();
    res.status(200).json({ message: "Document deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting document", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
