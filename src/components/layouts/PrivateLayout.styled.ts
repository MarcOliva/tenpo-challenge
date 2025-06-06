import { styled } from "@stitches/local";

export const Header = styled("header", {
  background: "white",
  padding: "1rem 2rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  position: "sticky",
  top: 0,
  zIndex: 100,
});

export const HeaderContent = styled("div", {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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
  padding: "2rem",
  maxWidth: "1200px",
  width: "100%",
  margin: "0 auto",
  backgroundColor: "black",
});
