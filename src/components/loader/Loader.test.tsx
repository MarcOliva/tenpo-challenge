import React from "react";
import { render } from "@testing-library/react";
import { Loader } from "./Loader";

describe("Loader", () => {
  it("renderiza el componente Loader", () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
