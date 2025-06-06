import { LoginCredentials } from "@/models/Auth";
import { authService } from "@/services/auth";
import { useAuthStore } from "@/store/authStore";
import { isValidEmail } from "@/utils/validations";
import { useRouter } from "next/router";
import { useState } from "react";

export const useLogin = () => {
  const router = useRouter();
  const setToken = useAuthStore((state) => state.setToken);
  const [error, setError] = useState("");
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const handleSubmit = async (
    e: React.FormEvent,
    formData: LoginCredentials
  ) => {
    e.preventDefault();
    setError("");
    setIsLoadingLogin(true);
    try {
      if (!isValidEmail(formData.email)) {
        setError("Email inválido");
        return;
      }
      const response = await authService.login(formData);
      setToken(response.token);
      router.push("/");
    } catch (error: unknown) {
      setError(
        error instanceof Error ? error.message : "Error al iniciar sesión"
      );
    } finally {
      setIsLoadingLogin(false);
    }
  };

  return {
    error,
    isLoadingLogin,
    handleSubmit,
  };
};
