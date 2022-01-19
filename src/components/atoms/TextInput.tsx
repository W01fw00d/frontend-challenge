import React from "react";
import { Input as MuiInput } from "@mui/material";

function TextInput() {
  const styles = {
    borderRadius: "4px",
    height: "32px",
    background: "#F0F3F7",

    fontSize: "15px",
    color: "#252525",
    padding: "4px 5px 5px",

    "&::placeholder": {
      color: "#8596A6",
    },
  };

  return <MuiInput id="pick-up-field" placeholder="Pick Up" sx={styles} />;
}

export default TextInput;
