import { styled } from "@stitches/local";

export const Header = styled("header", {
  background: "white",
  padding: "1rem 2rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
});

export const HeaderContent = styled("div", {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@bp7": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const TitleContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  backgroundColor: "black",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
});
export const Title = styled("span", {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "$primary",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const Main = styled("main", {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
});

export const Content = styled("div", {
  width: "100%",
  background: "white",
  padding: "2rem",
  borderRadius: "1rem",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "@bp2": {
    maxWidth: "400px",
  },
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
});
