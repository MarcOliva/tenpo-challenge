import { styled } from "@stitches/local";
import { CustomButton } from "@/components/button/CustomButton";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // minHeight: "100vh",
  backgroundColor: "$lightGray",
});

export const LoginBox = styled("div", {
  background: "white",
  padding: "2rem",
  borderRadius: 8,
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  width: "100%",
  maxWidth: 400,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  img: {
    alignSelf: "center",
  },
});

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const InputGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  label: {
    fontSize: "0.9rem",
    color: "$lightGray50",
  },
  input: {
    padding: "0.75rem",
    border: "1px solid $lightGray20",
    borderRadius: 4,
    fontSize: "1rem",
    transition: "border-color 0.2s",
    "&:focus": {
      outline: "none",
      borderColor: "$primary",
    },
  },
});

export const SubmitButton = styled(CustomButton, {
  backgroundColor: "$primary",
  color: "black",
  padding: "0.75rem",
  border: "none",
  borderRadius: 4,
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background-color 0.2s",
  marginTop: "1rem",
  "&:hover": {
    backgroundColor: "$primaryHover",
  },
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },
  },
});

export const ErrorMsg = styled("p", {
  color: "$error",
  fontSize: "0.875rem",
  textAlign: "center",
  marginTop: "0.5rem",
});
