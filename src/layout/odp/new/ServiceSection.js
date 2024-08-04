import React, { useState, useEffect } from "react";
import {
  Autocomplete,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { opd_service_master } from "@/masters/opd-service-master";
import { serviceOptions } from "./sectionsData";

const ServiceSection = ({ formData, handleInputChange }) => {
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    if (formData.service === "OPD") {
      const doctors = opd_service_master.filter(
        (doctor) => doctor.routine_charges !== null
      );
      setFilteredDoctors(doctors);
    }
  }, [formData.service]);

  const handleConsultationTypeChange = (event) => {
    const value = event.target.value;
    handleInputChange("consultationType", value);
  };

  const handleDoctorChange = (_, value) => {
    handleInputChange("doctor", value?.doctor_name || "");

    if (formData.companyName !== "RGHS")
      handleInputChange(
        "charges",
        value
          ? formData.consultationType === "Routine Consultation"
            ? value.routine_charges
            : value.emergency_charges
          : ""
      );
  };

  useEffect(() => {
    if (
      formData.paymentMethod === "credit" &&
      formData.companyName === "RGHS"
    ) {
      handleInputChange("charges", 350);
    }
  }, [formData.paymentMethod, formData.companyName]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Service Information</h2>
      <Autocomplete
        options={serviceOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Service"
            variant="outlined"
            size="small"
          />
        )}
        className="w-full"
        value={formData.service}
        onChange={(_, value) => handleInputChange("service", value)}
      />
      {formData.service === "OPD" && (
        <>
          <FormControl variant="outlined" size="small" className="w-full">
            <InputLabel>Consultation Type</InputLabel>
            <Select
              value={formData.consultationType}
              onChange={handleConsultationTypeChange}
              label="Consultation Type"
            >
              <MenuItem value="Routine Consultation">
                Routine Consultation
              </MenuItem>
              <MenuItem value="Emergency Consultation">
                Emergency Consultation
              </MenuItem>
            </Select>
          </FormControl>
          <Autocomplete
            options={filteredDoctors}
            getOptionLabel={(option) => option.doctor_name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Doctor"
                variant="outlined"
                size="small"
              />
            )}
            className="w-full"
            value={
              filteredDoctors.find(
                (doc) => doc.doctor_name === formData.doctor
              ) || null
            }
            onChange={handleDoctorChange}
          />
          <TextField
            placeholder="Charges"
            variant="outlined"
            size="small"
            className="w-full"
            value={formData.charges}
            onChange={(e) => handleInputChange("charges", e.target.value)}
            disabled
          />
        </>
      )}
    </div>
  );
};

export default ServiceSection;
