import React from "react";
import { TextField } from "@mui/material";

const ReferralInfoSection = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold">Referral Information</h2>
    <TextField
      label="Referrer Name"
      variant="outlined"
      size="small"
      className="w-full"
      value={formData.referrerName}
      onChange={(e) => handleInputChange("referrerName", e.target.value)}
    />
  </div>
);

export default ReferralInfoSection;
