import React from "react";
import { styled } from "@mui/system";

interface Props {
  title: React.ReactFragment;
  subtitle: React.ReactFragment;
}

const Background = styled("span")(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexFlow: "column",
  backgroundImage: "linear-gradient(#10A2EA, #0F99E8)",
}));

function FullScreenError({ title, subtitle }: Props) {
  return (
    <Background>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </Background>
  );
}

export default FullScreenError;
