import { LoginCredentials, LoginResponse } from "@/models/Auth";

const generateFakeToken = (): string => {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = btoa(
    JSON.stringify({
      sub: "1234567890",
      name: "Usuario Demo",
      email: "demo@example.com",
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 3600,
    })
  );
  const signature = "fake_signature";
  return `${header}.${payload}.${signature}`;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const authService = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    await delay(1000);

    // if (credentials.password.length < 6) {
    //   throw new Error("La contraseña debe tener al menos 6 caracteres");
    // }

    const response: LoginResponse = {
      token: generateFakeToken(),
      user: {
        id: "1234567890",
        email: credentials.email,
        name: "Usuario Demo",
      },
    };

    return response;
  },

  logout: async (): Promise<void> => {
    await delay(500);
    return Promise.resolve();
  },

  validateToken: (token: string): boolean => {
    try {
      const [, payload] = token.split(".");
      const decodedPayload = JSON.parse(atob(payload));
      const currentTime = Math.floor(Date.now() / 1000);
      return decodedPayload.exp > currentTime;
    } catch {
      return false;
    }
  },
};
