import { ReactNode } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/router";
import { CustomButton } from "../button/CustomButton";
import {
  Header,
  HeaderContent,
  Main,
  Title,
  TitleContainer,
} from "./PrivateLayout.styled";
import { Layout } from "./Layout";

interface PrivateLayoutProps {
  children: ReactNode;
}

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  const { logout } = useAuthStore();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <Layout>
      <Header>
        <HeaderContent>
          <Link href="/">
            <TitleContainer>
              <Title>Tenpo Challenge</Title>
            </TitleContainer>
          </Link>
          <CustomButton onClick={handleLogout} isLogout>
            Cerrar Sesión
          </CustomButton>
        </HeaderContent>
      </Header>

      <Main>{children}</Main>
    </Layout>
  );
};

export default PrivateLayout;
