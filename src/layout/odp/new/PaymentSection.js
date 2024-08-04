import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { paymentOptions, companyOptions } from "./sectionsData";

const PaymentSection = ({ formData, handleInputChange, resetServiceInfo }) => {
  const handlePaymentMethodChange = (_, value) => {
    handleInputChange("paymentMethod", value);
    handleInputChange("companyName", "");
    resetServiceInfo();
  };

  const handleCompanyNameChange = (_, value) => {
    handleInputChange("companyName", value);
    resetServiceInfo();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Payment Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Autocomplete
          options={paymentOptions}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Mode of Payment"
              variant="outlined"
              size="small"
              required
            />
          )}
          className="w-full"
          value={formData.paymentMethod}
          onChange={handlePaymentMethodChange}
        />
        {formData.paymentMethod === "credit" && (
          <Autocomplete
            options={companyOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Company Name"
                variant="outlined"
                size="small"
                required
              />
            )}
            className="w-full"
            value={formData.companyName}
            onChange={handleCompanyNameChange}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentSection;
