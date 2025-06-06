import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CustomButton } from "./CustomButton";

describe("CustomButton", () => {
  it("renderiza el texto correctamente", () => {
    render(<CustomButton>Click me</CustomButton>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("llama a onClick cuando se hace click", () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick}>Click</CustomButton>);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("muestra el loader cuando isLoading es true", () => {
    render(<CustomButton isLoading>Loading</CustomButton>);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("muestra el icono de logout cuando isLogout es true", () => {
    render(<CustomButton isLogout>Logout</CustomButton>);
    expect(screen.getByTestId("logout-icon")).toBeInTheDocument();
  });
});
