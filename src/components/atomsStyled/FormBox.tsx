import { styled } from "@mui/system";

export default styled("div")(({ style }: any) => ({
  display: "flex",
  flexDirection: "column",

  width: "400px",
  borderRadius: "8px",
  padding: "16px",
  margin: "32px",
  backgroundColor: "white",
  boxShadow: "0 1px 2px 0 rgba(0,0,0,0.10), 0 1px 8px 0 rgba(0,0,0,0.10)",
  ...style,
}));
