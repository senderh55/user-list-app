import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

const UserSearchBar = ({ onSearchChange, onFieldChange, searchField }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      sx={{
        mb: 2,
        p: 2, // Adding padding around the Box
        width: "100%", // Ensuring the Box takes full width if not already
      }}
    >
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Search By</InputLabel>
        <Select value={searchField} onChange={onFieldChange} label="Search By">
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="email">Email</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label={`Search by ${
          searchField.charAt(0).toUpperCase() + searchField.slice(1)
        }`}
        variant="outlined"
        fullWidth
        onChange={(event) => onSearchChange(event.target.value.toLowerCase())}
      />
    </Box>
  );
};

export default UserSearchBar;
