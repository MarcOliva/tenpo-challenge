import { styled } from "@stitches/local";

export const Container = styled("div", {
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  //   padding: "20px",
  display: "flex",
  flexDirection: "column",
  //   alignItems: "center",
});

export const List = styled("div", {
  marginBottom: "20px",
  borderRadius: "8px",
  overflow: "hidden",
});

export const PostCard = styled("div", {
  background: "white",
  borderRadius: "8px",
  padding: "20px",
  margin: "10px",
  width: "auto",
  height: "100%",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
  },
});

export const PostTitle = styled("div", {
  fontSize: "1.5rem",
  color: "#333",
  marginBottom: "10px",
  display: "-webkit-box",
  overflow: "hidden",
  textOverflow: "ellipsis",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
});

export const PostBody = styled("div", {
  color: "$lightGray50",
  lineHeight: "1.6",
  marginBottom: "15px",
  display: "-webkit-box",
  overflow: "hidden",
  textOverflow: "ellipsis",
  WebkitLineClamp: 4,
  WebkitBoxOrient: "vertical",
});

export const PostMeta = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  color: "$lightGray40",
  fontSize: "0.9rem",
  flex: 1,
});

export const PostDescription = styled("span", {
  fontSize: "0.9rem",
  color: "$lightGray40",
});
