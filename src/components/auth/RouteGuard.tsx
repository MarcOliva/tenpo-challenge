import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "@/store/authStore";
import { FullScreenLoader } from "../loader/FullScreenLoader";

interface RouteGuardProps {
  children: React.ReactNode;
}

// Lista de rutas públicas que no requieren autenticación
const publicPaths = ["/login"];

const RouteGuard = ({ children }: RouteGuardProps) => {
  const router = useRouter();
  const { isAuthenticated, token } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // este timeout es para mostrar un loading hasta que se termine de hidratar el estado

    const timeoutId = setTimeout(() => {
      const isPublicPath = publicPaths.includes(router.pathname);

      if (isAuthenticated && isPublicPath) {
        router.replace("/");
      } else if (!isAuthenticated && !isPublicPath) {
        router.replace("/login");
      }

      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [isAuthenticated, token, router]);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (!isAuthenticated && !publicPaths.includes(router.pathname)) {
    return <FullScreenLoader />;
  }

  return <>{children}</>;
};

export default RouteGuard;
