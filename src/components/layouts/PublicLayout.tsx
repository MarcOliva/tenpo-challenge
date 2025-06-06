import { ReactNode } from "react";
import Link from "next/link";
import {
  Header,
  HeaderContent,
  Main,
  Content,
  TitleContainer,
  Title,
} from "./PublicLayout.styled";
import { Layout } from "./Layout";

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <Layout>
      <Header>
        <HeaderContent>
          <Link href="/">
            <TitleContainer>
              <Title>Tenpo Challenge</Title>
            </TitleContainer>
          </Link>
        </HeaderContent>
      </Header>

      <Main>
        <Content>{children}</Content>
      </Main>
    </Layout>
  );
};

export default PublicLayout;
