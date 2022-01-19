import React from "react";

import Box from "@mui/material/Box";

import TextInput from "../atoms/TextInput";

import pickUpBadgeBlank from "@mui/icons-material";

function IconTextInput({ icon }) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      {icon}
      <TextInput />
    </Box>
  );
}

export default IconTextInput;
