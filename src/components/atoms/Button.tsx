import React from "react";
import { Button as MuiButton } from "@mui/material";

function Button({ label, styles = {}, disabled = false, onClick }) {
  const defaultStyles = {
    height: "40px",
    boxShadow: "0 1px 2px 0 rgba(16,162,234,0.30) !important",
    backgroundImage: "linear-gradient(#10A2EA, #0F99E8)",
    fontWeight: 900,
    fontSize: "16px",
    color: "#FFFFFF",
    textTransform: "none",

    "&:disabled": {
      color: "#FFFFFF",
      opacity: "0.5",
    },

    ...styles,
  };

  return (
    <MuiButton
      variant="contained"
      sx={defaultStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </MuiButton>
  );
}

export default Button;
