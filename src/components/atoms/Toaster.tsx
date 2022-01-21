import React from "react";
import Snackbar from "@mui/material/Snackbar";

function Toaster({ isOpen, message, styles = {}, close }) {
  const defaultStyles = {
    "&.MuiSnackbar-root": {
      top: "32px !important",
      right: "32px  !important",
    },
    "& .MuiPaper-root": {
      borderRadius: "8px",
      backgroundColor: "rgba(51,51,51,0.90)",
      boxShadow: "0 1px 2px 0 rgba(0,0,0,0.10), 0 1px 8px 0 rgba(0,0,0,0.10)",
      fontSize: "16px",
      color: "#FFFFFF",
    },

    ...styles,
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={isOpen}
      autoHideDuration={5000}
      onClose={(_, reason: string) => {
        if (reason === "timeout") {
          close();
        }
      }}
      onClick={close}
      message={message}
      sx={defaultStyles}
    />
  );
}

export default Toaster;
