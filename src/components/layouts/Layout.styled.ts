import { styled } from "@stitches/local";

export const LayoutRoot = styled("div", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$lightGray10",
});
export const Footer = styled("footer", {
  background: "white",
  padding: "1.5rem 2rem",
  borderTop: "1px solid #e5e7eb",
  marginTop: "auto",
});

export const FooterContent = styled("div", {
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center",
  color: "#6b7280",
  fontSize: "0.875rem",
  p: {
    fontWeight: "bold",
  },
});
