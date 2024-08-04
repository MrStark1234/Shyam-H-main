import React, { useEffect } from "react";
import { TextField, RadioGroup, FormControlLabel, Radio } from "@mui/material";

const PaymentCollectionSection = ({ formData, handleInputChange }) => {
  useEffect(() => {
    let amountToBeCollected = 0;
    if (formData.companyName === "RGHS") {
      amountToBeCollected = 0;
    } else {
      const discount = formData.discountAmount
        ? parseFloat(formData.discountAmount)
        : 0;
      const charges = formData.charges ? parseFloat(formData.charges) : 0;
      amountToBeCollected = charges - discount;
    }
    handleInputChange("amountToBeCollected", amountToBeCollected);
  }, [
    formData.companyName,
    formData.charges,
    formData.discountAmount,
    handleInputChange,
  ]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Payment Collection</h2>
      <TextField
        label="Amount to be Collected"
        variant="outlined"
        size="small"
        className="w-full"
        value={formData.amountToBeCollected}
        onChange={(e) =>
          handleInputChange("amountToBeCollected", parseFloat(e.target.value))
        }
        disabled={formData.paymentMethod === "credit"}
      />
      {formData.paymentMethod === "self" && (
        <>
          <RadioGroup
            row
            aria-label="paymentBy"
            name="paymentBy"
            value={formData.paymentBy}
            onChange={(e) => handleInputChange("paymentBy", e.target.value)}
          >
            <FormControlLabel
              value="cash"
              control={<Radio size="small" />}
              label="Cash"
            />
            <FormControlLabel
              value="online"
              control={<Radio size="small" />}
              label="Online"
            />
          </RadioGroup>
          {formData.paymentBy === "online" && (
            <TextField
              label="Reference ID"
              variant="outlined"
              size="small"
              className="w-full"
              value={formData.referenceId}
              onChange={(e) => handleInputChange("referenceId", e.target.value)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default PaymentCollectionSection;
