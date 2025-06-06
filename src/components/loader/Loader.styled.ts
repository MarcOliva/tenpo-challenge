import { styled, keyframes } from "@stitches/react";

const spin = keyframes({
  to: { transform: "rotate(360deg)" },
});

export const LoaderRoot = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const LoaderInner = styled("div", {
  width: 24,
  height: 24,
  variants: {
    size: {
      small: {
        width: 16,
        height: 16,
      },
      medium: {
        width: 24,
        height: 24,
      },
      large: {
        width: 32,
        height: 32,
      },
      xlarge: {
        width: 40,
        height: 40,
      },
    },
  },
  border: "4px solid black", // TODO: change to $primary
  borderTop: "4px solid $primary", // TODO: change to $primary
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
});
