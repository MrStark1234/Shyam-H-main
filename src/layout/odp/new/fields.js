import React from "react";
import {
  TextField,
  Autocomplete,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

const Fields = ({ section, formData, handleInputChange }) => {
  return (
    <div
      className={`grid grid-cols-1 ${
        section.fields.length > 2 ? "sm:grid-cols-2" : ""
      } gap-4`}
    >
      {section.fields.map(
        (field, fieldIndex) =>
          (field.condition ? field.condition(formData) : true) && (
            <div
              key={fieldIndex}
              className={field.width ? `max-w-[${field.width}]` : "w-full"}
            >
              {field.type === "text" && (
                <TextField
                  label={field.label}
                  variant="outlined"
                  size="small"
                  className="w-full"
                  required={field.required}
                  value={formData[field.key]}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                />
              )}
              {field.type === "autocomplete" && (
                <Autocomplete
                  options={field.options}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={field.label}
                      variant="outlined"
                      size="small"
                    />
                  )}
                  className="w-full"
                  value={formData[field.key]}
                  onChange={(_, value) => handleInputChange(field.key, value)}
                />
              )}
              {field.type === "radio" && (
                <FormControl component="fieldset" className="w-full">
                  <FormLabel component="legend">{field.label}</FormLabel>
                  <RadioGroup
                    aria-label={field.key}
                    name={field.key}
                    value={formData[field.key]}
                    onChange={(e) =>
                      handleInputChange(field.key, e.target.value)
                    }
                    row
                  >
                    {field.options.map((option, optionIndex) => (
                      <FormControlLabel
                        key={optionIndex}
                        value={option.value}
                        control={<Radio size="small" />}
                        label={option.label}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
              {field.type === "select" && (
                <FormControl variant="outlined" size="small" className="w-full">
                  <Select
                    label={field.label}
                    value={formData[field.key]}
                    onChange={(e) =>
                      handleInputChange(field.key, e.target.value)
                    }
                  >
                    {field.options.map((option, optionIndex) => (
                      <MenuItem key={optionIndex} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default Fields;
