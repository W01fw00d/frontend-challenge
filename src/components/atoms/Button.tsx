import React from "react";
import { Button as MuiButton } from "@mui/material";

interface Props {
  label: string;
  styles: object;
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ label, styles = {}, disabled = false, onClick }: Props) {
  const defaultStyles: any = {
    height: "40px",
    boxShadow: "0 1px 2px 0 rgba(16,162,234,0.30)",
    backgroundImage: "linear-gradient(#10A2EA, #0F99E8)",
    fontWeight: 900,
    fontSize: "16px",
    color: "#FFFFFF",
    textTransform: "none",

    "&:disabled": {
      color: "#FFFFFF",
      opacity: "0.5",
    },

    "&.MuiButtonBase-root:hover": {
      boxShadow: "0 1px 2px 0 rgba(16,162,234,0.30)",
    },

    "&.MuiButton-root:hover": {
      boxShadow: "0 1px 2px 0 rgba(16,162,234,0.30)",
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
