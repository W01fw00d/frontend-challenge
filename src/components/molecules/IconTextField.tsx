import React from "react";

import Box from "@mui/material/Box";

import TextField from "../atoms/TextField";

import pickUpBadgeBlank from "@mui/icons-material";

function IconTextField({ icon }) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      {icon}
      <TextField />
    </Box>
  );
}

export default IconTextField;
