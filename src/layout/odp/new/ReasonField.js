import React, { useState } from "react";
import { TextField, Autocomplete } from "@mui/material";

const ReasonField = ({ label, options, value, onChange }) => {
  const [customReason, setCustomReason] = useState("");

  const handleCustomReasonChange = (event) => {
    setCustomReason(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="space-y-4">
      <Autocomplete
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="outlined"
            size="small"
          />
        )}
        className="w-full"
        value={options.includes(value) ? value : customReason}
        onChange={(_, value) => onChange(value)}
      />
      {!options.includes(value) && (
        <TextField
          label="Custom Reason"
          variant="outlined"
          size="small"
          className="w-full"
          value={customReason}
          onChange={handleCustomReasonChange}
        />
      )}
    </div>
  );
};

export default ReasonField;
