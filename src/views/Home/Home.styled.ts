import { styled } from "@stitches/local";
export const HomeRoot = styled("div", {
  width: "100%",
  //   maxWidth: "1200px",

  padding: "20px",
  minHeight: "100vh",
});

export const Header = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",
  padding: "1rem",
  background: "white",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

export const HeaderTitle = styled("h1", {
  fontSize: "1.8rem",
  color: "$lightGray50",
  margin: "0",
});

export const ErrorContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "200px",
  background: "white",
  borderRadius: "8px",
  padding: "2rem",
  margin: "1rem 0",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

export const Error = styled("p", {
  color: "$error",
  fontSize: "1.1rem",
  textAlign: "center",
});
