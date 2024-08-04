const RGHS_CHARGES = 350;

const opd_service_master = [
  {
    doctor_name: "Manoj Kumar Gupta",
    department: "ORTHOPAEDICS",
    type: "FT",
    routine_charges: 250,
    emergency_charges: 400,
  },
  {
    doctor_name: "Nidhi Gupta",
    department: "ANAESTHESIOLOGY",
    type: "FT",
    routine_charges: 250,
    emergency_charges: 400,
  },
  {
    doctor_name: "Ashwani Goyal",
    department: "GENERAL SURGERY",
    type: "FT",
    routine_charges: 250,
    emergency_charges: 400,
  },
  {
    doctor_name: "Jaisingh Yadav",
    department: "GYNAE & OBS",
    type: "FT",
    routine_charges: 250,
    emergency_charges: 400,
  },
  {
    doctor_name: "Harbans Goyal",
    department: "GENERAL MEDICINE",
    type: "FT",
    routine_charges: 250,
    emergency_charges: 400,
  },
  {
    doctor_name: "Nitin Goyal",
    department: "ORTHOPAEDICS",
    type: "PT",
    routine_charges: 300,
    emergency_charges: null,
  },
  {
    doctor_name: "Kamlesh Chaudhary",
    department: "NEUROLOGY",
    type: "PT",
    routine_charges: 400,
    emergency_charges: null,
  },
  {
    doctor_name: "Surender Yadav",
    department: "RADIOLOGY",
    type: "PT",
    routine_charges: null,
    emergency_charges: null,
  },
  {
    doctor_name: "Divyanshu Goyal",
    department: "ORTHOPAEDICS",
    type: "PT",
    routine_charges: 400,
    emergency_charges: null,
  },
  {
    doctor_name: "Aviral Gupta",
    department: "ORTHOPAEDICS",
    type: "PT",
    routine_charges: 400,
    emergency_charges: null,
  },
  {
    doctor_name: "Lokesh Sharma",
    department: "UROLOGY",
    type: "PT",
    routine_charges: 400,
    emergency_charges: null,
  },
  {
    doctor_name: "Amit Agarwal",
    department: "ORTHOPAEDICS",
    type: "PT",
    routine_charges: 400,
    emergency_charges: null,
  },
  {
    doctor_name: "Piyush Agarwal",
    department: "ORTHOPAEDICS",
    type: "PT",
    routine_charges: 400,
    emergency_charges: null,
  },
  {
    doctor_name: "Dinesh Gupta",
    department: "ONCOLOGY",
    type: "PT",
    routine_charges: 400,
    emergency_charges: null,
  },
  {
    doctor_name: "Deepak Khurana",
    department: "ORTHOPAEDICS",
    type: "PT",
    routine_charges: 400,
    emergency_charges: null,
  },
  {
    doctor_name: "Abhishek Prakash",
    department: "ENDOCRINOLOGY",
    type: "PT",
    routine_charges: 400,
    emergency_charges: null,
  },
  {
    doctor_name: "Rahul Kankhedia",
    department: "GENERAL SURGERY",
    type: "PT",
    routine_charges: 400,
    emergency_charges: null,
  },
  {
    doctor_name: "Akash Rajendra",
    department: "GASTROENTEROLOGY",
    type: "PT",
    routine_charges: 400,
    emergency_charges: null,
  },
  {
    doctor_name: "Yogesh Agarwal",
    department: "ANAESTHESIOLOGY",
    type: "PT",
    routine_charges: null,
    emergency_charges: null,
  },
  {
    doctor_name: "Manoj Siwach",
    department: "ORTHOPAEDICS",
    type: "PT",
    routine_charges: null,
    emergency_charges: null,
  },
  {
    doctor_name: "Mahesh Sharma",
    department: "ORTHOPAEDICS",
    type: "PT",
    routine_charges: null,
    emergency_charges: null,
  },
  {
    doctor_name: "Saurabh Sharma",
    department: "ANAESTHESIOLOGY",
    type: "PT",
    routine_charges: null,
    emergency_charges: null,
  },
  {
    doctor_name: "Satya Narayan",
    department: "ANAESTHESIOLOGY",
    type: "PT",
    routine_charges: null,
    emergency_charges: null,
  },
  {
    doctor_name: "Surender Sharma",
    department: "ANAESTHESIOLOGY",
    type: "PT",
    routine_charges: null,
    emergency_charges: null,
  },
  {
    doctor_name: "Shirish Gupta",
    department: "GENERAL SURGERY",
    type: "PT",
    routine_charges: 400,
    emergency_charges: null,
  },
  {
    doctor_name: "Amit Kumar",
    department: "RADIOLOGY",
    type: "PT",
    routine_charges: null,
    emergency_charges: null,
  },
  {
    doctor_name: "Surender Meena",
    department: "ENT",
    type: "PT",
    routine_charges: 250,
    emergency_charges: null,
  },
  {
    doctor_name: "Lokesh Kumar",
    department: "RADIOLOGY",
    type: "PT",
    routine_charges: null,
    emergency_charges: null,
  },
  {
    doctor_name: "Aashish Kr Jain",
    department: "RADIOLOGY",
    type: "PT",
    routine_charges: null,
    emergency_charges: null,
  },
  {
    doctor_name: "RP Saini",
    department: "RADIOLOGY",
    type: "PT",
    routine_charges: null,
    emergency_charges: null,
  },
  {
    doctor_name: "Ankur Yadav",
    department: "ANAESTHESIOLOGY",
    type: "FT",
    routine_charges: 250,
    emergency_charges: 400,
  },
  {
    doctor_name: "Kanan Sharma",
    department: "GYNAE & OBS",
    type: "PT",
    routine_charges: null,
    emergency_charges: null,
  },
  {
    doctor_name: "RS Chhipi",
    department: "paediatrics",
    type: "FT",
    routine_charges: 250,
    emergency_charges: 400,
  },
  {
    doctor_name: "Anshul Sharma",
    department: "orthopaedics",
    type: "FT",
    routine_charges: 250,
    emergency_charges: 400,
  },
];

export { RGHS_CHARGES, opd_service_master };