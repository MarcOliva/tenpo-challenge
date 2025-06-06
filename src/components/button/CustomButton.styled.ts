import { styled } from "@stitches/local";

export const CustomButtonRoot = styled("button", {
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  cursor: "pointer",
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: "$primaryHover",
  },
  ".logout-icon": {
    display: "none",
    fontSize: "1.5rem",
  },
  ".button-text": {
    display: "block",
  },
  "@bp7": {
    padding: "8px",
    ".logout-icon": {
      display: "block",
    },
  },
  variants: {
    isLoading: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },
    isLogout: {
      true: {
        "@bp7": {
          ".button-text": {
            display: "none",
          },
        },
        "&:hover": {
          backgroundColor: "$primary",
          color: "Black",
        },
      },
    },
  },
});
