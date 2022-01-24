import React, { useRef } from "react";
import { Input as MuiInput } from "@mui/material";

interface Props {
  id: string;
  placeholder: string;
  value: string;
  onChange: Function;
  geocodeAddress: Function;
}

function TextInput({
  id,
  placeholder,
  value,
  onChange,
  geocodeAddress,
}: Props) {
  const timeout = useRef<any>();

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

    "&.MuiInputBase-root.MuiInput-root:before": {
      borderBottom: "none",
    },

    "&.MuiInputBase-root.MuiInput-root:after": {
      borderBottom: "none",
    },
  };

  return (
    <MuiInput
      id={id}
      placeholder={placeholder}
      sx={styles}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);

        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
          geocodeAddress(event);
        }, 1500);
      }}
      onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
        clearTimeout(timeout.current);
        geocodeAddress(event);
      }}
    />
  );
}

export default TextInput;
