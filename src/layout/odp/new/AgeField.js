import React from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const AgeField = ({
  label,
  age,
  ageType,
  onAgeChange,
  onAgeTypeChange,
  required,
}) => {
  return (
    <div className="flex items-center space-x-4 w-full">
      <TextField
        label={label}
        variant="outlined"
        size="small"
        value={age}
        onChange={(e) => onAgeChange(e.target.value)}
        required={required}
        className="flex-1"
      />
      <FormControl variant="outlined" size="small" className="flex-1">
        <InputLabel>Type</InputLabel>
        <Select
          value={ageType}
          onChange={(e) => onAgeTypeChange(e.target.value)}
          label="Type"
        >
          <MenuItem value="years">Years</MenuItem>
          <MenuItem value="months">Months</MenuItem>
          <MenuItem value="days">Days</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default AgeField;
