import React from "react";
import { TextField, Autocomplete } from "@mui/material";
import AgeField from "./AgeField";
import { genderOptions, kinRelationOptions } from "./sectionsData";

const PersonalInfoSection = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold">Personal Information</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <TextField
        label="First Name"
        variant="outlined"
        size="small"
        className="w-full"
        required
        value={formData.firstName}
        onChange={(e) => handleInputChange("firstName", e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        size="small"
        className="w-full"
        value={formData.lastName}
        onChange={(e) => handleInputChange("lastName", e.target.value)}
      />
      <AgeField
        label="Age"
        age={formData.age}
        ageType={formData.ageType}
        onAgeChange={(value) => handleInputChange("age", value)}
        onAgeTypeChange={(value) => handleInputChange("ageType", value)}
        required
      />
      <Autocomplete
        options={genderOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Gender"
            variant="outlined"
            size="small"
            required
          />
        )}
        className="w-full"
        value={formData.gender}
        onChange={(_, value) => handleInputChange("gender", value)}
      />
      <Autocomplete
        options={kinRelationOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Kin Relation"
            variant="outlined"
            size="small"
          />
        )}
        className="w-full"
        value={formData.kinRelation}
        onChange={(_, value) => handleInputChange("kinRelation", value)}
      />
      <TextField
        label="Kin Name"
        variant="outlined"
        size="small"
        className="w-full"
        value={formData.kinName}
        onChange={(e) => handleInputChange("kinName", e.target.value)}
      />
      <TextField
        label="Kin Phone Number"
        variant="outlined"
        size="small"
        className="w-full"
        value={formData.kinPhoneNumber}
        onChange={(e) => handleInputChange("kinPhoneNumber", e.target.value)}
      />
      <TextField
        label="Address"
        variant="outlined"
        size="small"
        className="w-full"
        value={formData.address}
        onChange={(e) => handleInputChange("address", e.target.value)}
      />
      <TextField
        label="State"
        variant="outlined"
        size="small"
        className="w-full"
        value={formData.state}
        onChange={(e) => handleInputChange("state", e.target.value)}
      />
    </div>
  </div>
);

export default PersonalInfoSection;
