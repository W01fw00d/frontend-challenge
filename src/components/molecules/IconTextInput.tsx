import React from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/system";

import TextInput from "../atoms/TextInput";

function IconTextInput({
  iconPath,
  alt,
  id,
  placeholder,
  styles = {},
  value,
  onChange,
  geocodeAddress,
}) {
  const IconImg = styled("img")({
    margin: "0 8px 0 0",
  });

  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", ...styles }}>
      <IconImg src={iconPath} alt={alt} />
      <TextInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        geocodeAddress={geocodeAddress}
      />
    </Box>
  );
}

export default IconTextInput;
