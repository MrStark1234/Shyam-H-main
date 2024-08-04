import React from "react";
import ReasonField from "./ReasonField";
import { discountReasons } from "./sectionsData";
import { TextField } from "@mui/material";

const DiscountSection = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold">Discount Information</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <TextField
        label="Discount (%)"
        variant="outlined"
        size="small"
        className="w-full"
        value={formData.discountPercentage}
        onChange={(e) =>
          handleInputChange("discountPercentage", e.target.value)
        }
      />
      <TextField
        label="Discount Amount"
        variant="outlined"
        size="small"
        className="w-full"
        value={formData.discountAmount}
        onChange={(e) => handleInputChange("discountAmount", e.target.value)}
      />
    </div>
    <ReasonField
      label="Reason for Discount"
      options={discountReasons}
      value={formData.discountReason}
      onChange={(value) => handleInputChange("discountReason", value)}
    />
  </div>
);

export default DiscountSection;
