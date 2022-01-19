import React from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/system";

import TextInput from "../atoms/TextInput";

function IconTextInput({ iconPath, alt, placeholder, styles = {} }) {
  const IconImg = styled("img")({
    margin: "0 8px 0 0",
  });

  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", ...styles }}>
      <IconImg src={iconPath} alt={alt} />
      <TextInput placeholder={placeholder} />
    </Box>
  );
}

export default IconTextInput;
