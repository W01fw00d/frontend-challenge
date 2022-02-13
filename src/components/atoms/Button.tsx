import React from "react";
import { Button as MuiButton } from "@mui/material";

interface Props {
  label: string;
  styles?: object;
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ label, styles = {}, disabled = false, onClick }: Props) {
  const getStyles = (): any => {
    const boxShadow = "0 1px 2px 0 rgba(16,162,234,0.30)";

    return {
      height: "40px",
      boxShadow,
      backgroundImage: "linear-gradient(#10A2EA, #0F99E8)",
      fontWeight: 900,
      fontSize: "16px",
      color: "#FFFFFF",
      textTransform: "none",

      "&:disabled": {
        color: "#FFFFFF",
        opacity: "0.5",
      },

      "&.MuiButtonBase-root:hover, &.MuiButton-root:hover": {
        boxShadow,
      },

      ...styles,
    };
  };

  return (
    <MuiButton
      variant="contained"
      sx={getStyles()}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </MuiButton>
  );
}

export default Button;
