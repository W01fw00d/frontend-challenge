import React from "react";
import { Input as MuiInput } from "@mui/material";

interface Props {
  id: string;
  placeholder: string;
  geocodeAddress: Function;
}

function TextInput({
  id,
  placeholder,
  value,
  onChange,
  geocodeAddress,
}: Props) {
  const styles = {
    borderRadius: "4px",
    height: "32px",
    background: "#F0F3F7",

    fontSize: "15px",
    color: "#252525",
    padding: "4px 5px 5px",

    width: "100%",

    "&::placeholder": {
      color: "#8596A6",
    },

    "&.MuiInputBase-root": {
      borderBottom: "none !important",
    },

    "&.MuiInputBase-root:before": {
      borderBottom: "none !important",
    },

    "&.MuiInputBase-root.MuiInput-root:after": {
      borderBottom: "none !important",
    },
  };

  return (
    <MuiInput
      id={id}
      placeholder={placeholder}
      sx={styles}
      value={value}
      onChange={onChange}
      onBlur={geocodeAddress}
    />
  );
}

export default TextInput;
