import React from "react";
import { render, screen, act } from "@testing-library/react";
import RouteGuard from "./RouteGuard";
import { useAuthStore } from "@/store/authStore";

const mockReplace = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    replace: mockReplace,
    pathname: "/private",
  }),
}));

jest.mock("@/store/authStore", () => ({
  useAuthStore: jest.fn(),
}));

jest.useFakeTimers();

describe("RouteGuard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza los hijos si está autenticado en ruta privada", async () => {
    (useAuthStore as unknown as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      token: "fake",
    });

    render(
      <RouteGuard>
        <div>Contenido Privado</div>
      </RouteGuard>
    );

    // Avanzar el timer para simular el timeout
    await act(async () => {
      jest.advanceTimersByTime(100);
    });

    expect(screen.getByText("Contenido Privado")).toBeInTheDocument();
  });

  it("redirige a login si no está autenticado en ruta privada", async () => {
    (useAuthStore as unknown as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      token: null,
    });

    render(
      <RouteGuard>
        <div>Contenido Privado</div>
      </RouteGuard>
    );

    // Avanzar el timer para simular el timeout
    await act(async () => {
      jest.advanceTimersByTime(100);
    });

    expect(mockReplace).toHaveBeenCalledWith("/login");
  });

  it("muestra el loader durante la carga inicial", () => {
    (useAuthStore as unknown as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      token: null,
    });

    render(
      <RouteGuard>
        <div>Contenido Privado</div>
      </RouteGuard>
    );

    // Verificar que el loader está presente antes del timeout
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
