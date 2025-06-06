import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PrivateLayout from "./PrivateLayout";
import { useAuthStore } from "@/store/authStore";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    pathname: "/",
  }),
}));

jest.mock("@/store/authStore", () => ({
  useAuthStore: jest.fn(),
}));

const mockLogout = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  (useAuthStore as unknown as jest.Mock).mockReturnValue({
    logout: mockLogout,
  });
});

describe("PrivateLayout", () => {
  it("renderiza el logo y el botón de logout", () => {
    render(<PrivateLayout>Contenido</PrivateLayout>);
    expect(screen.getByText("Tenpo Challenge")).toBeInTheDocument();
    expect(screen.getByText("Cerrar Sesión")).toBeInTheDocument();
  });

  it("llama a logout al hacer click en el botón", () => {
    render(<PrivateLayout>Contenido</PrivateLayout>);
    fireEvent.click(screen.getByText("Cerrar Sesión"));
    expect(mockLogout).toHaveBeenCalled();
  });

  it("renderiza el contenido hijo", () => {
    render(<PrivateLayout>Contenido</PrivateLayout>);
    expect(screen.getByText("Contenido")).toBeInTheDocument();
  });
});
