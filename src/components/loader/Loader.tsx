import React from "react";
import { LoaderInner, LoaderRoot } from "./Loader.styled";
type LoaderProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "small" | "medium" | "large" | "xlarge";
};
export const Loader = (props: LoaderProps) => {
  return (
    <LoaderRoot {...props} data-testid="loader">
      <LoaderInner size={props.size}></LoaderInner>
    </LoaderRoot>
  );
};
