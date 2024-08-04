import React, { useState } from "react";
import { TextField } from "@mui/material";

const PhoneNumberSection = ({ formData, handleInputChange }) => {
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched(true);
    if (formData.mobile.length !== 10) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Phone Number</h2>
      <TextField
        label="Mobile Number"
        variant="outlined"
        size="small"
        className="w-full"
        required
        value={formData.mobile}
        onChange={(e) => handleInputChange("mobile", e.target.value)}
        onBlur={handleBlur}
        error={touched && error}
        helperText={touched && error ? "Phone number must be 10 digits" : ""}
      />
    </div>
  );
};

export default PhoneNumberSection;
