import React, { useState } from "react";
import { Button } from "@mui/material";
import Layout from "@/layout/layout";
import PhoneNumberSection from "./PhoneNumberSection";
import PersonalInfoSection from "./PersonalInfoSection";
import PaymentSection from "./PaymentSection";
import ServiceSection from "./ServiceSection";
import PaymentCollectionSection from "./PaymentCollectionSection";
import DiscountSection from "./DiscountSection";
import ReferralInfoSection from "./ReferralInfoSection";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useRouter } from "next/router";

// Initialize Firestore

const OPDNewLayout = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    mobile: "",
    firstName: "",
    lastName: "",
    age: "",
    ageType: "years",
    gender: "",
    kinRelation: "",
    kinName: "",
    kinPhoneNumber: "",
    address: "",
    state: "",
    paymentMethod: "",
    companyName: "",
    service: "",
    consultationType: "",
    doctor: "",
    charges: "",
    amountToBeCollected: "",
    paymentBy: "",
    referenceId: "",
    discountPercentage: "",
    discountAmount: "",
    discountReason: "",
    referrerName: "",
  });

  const [userName, setUserName] = useState("Logged in User"); // Replace with actual logic to get the logged-in user's name

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const resetServiceInfo = () => {
    setFormData((prevData) => ({
      ...prevData,
      service: "",
      consultationType: "",
      doctor: "",
      charges: "",
      amountToBeCollected: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "patients"), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      console.log("Document successfully added!");
      router.push("/opd/prev");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <Layout>
      <div className="container mx-auto p-4 space-y-8">
        <h1 className="text-2xl font-semibold text-center">
          Register New Patient
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
          <PhoneNumberSection
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <PersonalInfoSection
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <ReferralInfoSection
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <PaymentSection
            formData={formData}
            handleInputChange={handleInputChange}
            resetServiceInfo={resetServiceInfo}
          />
          <ServiceSection
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <PaymentCollectionSection
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <DiscountSection
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="confirmation"
              name="confirmation"
              className="h-4 w-4"
            />
            <label htmlFor="confirmation" className="text-sm">
              I, {userName}, confirm that I have received the specified amount.
            </label>
          </div>

          <Button
            variant="contained"
            color="primary"
            className="w-full"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default OPDNewLayout;
