import { Footer, FooterContent, LayoutRoot } from "./Layout.styled";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutRoot>
      {children}

      <Footer>
        <FooterContent>
          <p>Desarrollado por: Marc Oliva</p>
        </FooterContent>
      </Footer>
    </LayoutRoot>
  );
};
