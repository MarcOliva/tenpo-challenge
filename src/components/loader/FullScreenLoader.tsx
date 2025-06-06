import { styled } from "@stitches/local";
import { Loader } from "./Loader";

const FullScreenContainer = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  zIndex: 9999,
});

export const FullScreenLoader = () => {
  return (
    <FullScreenContainer>
      <Loader size="xlarge" />
    </FullScreenContainer>
  );
};
