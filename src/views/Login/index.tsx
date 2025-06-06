import { useMemo, useState } from "react";
import RouteGuard from "@/components/auth/RouteGuard";
import PublicLayout from "@/components/layouts/PublicLayout";
import {
  Container,
  LoginBox,
  Form,
  InputGroup,
  SubmitButton,
  ErrorMsg,
} from "./Login.styled";
import Image from "next/image";
import { constants } from "@/utils/constants";
import { useLogin } from "./hooks/useLogin";
export default function LoginView() {
  const { error, isLoadingLogin, handleSubmit } = useLogin();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isDisabled = useMemo(() => {
    return !formData.email || !formData.password;
  }, [formData]);

  return (
    <RouteGuard>
      <PublicLayout>
        <Container>
          <LoginBox>
            <Image
              src={constants.TENPO_LOGO}
              alt="Tenpo Challenge"
              width={150}
              height={50}
            />
            <Form onSubmit={(e) => handleSubmit(e, formData)}>
              <InputGroup>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
              </InputGroup>
              {error && <ErrorMsg>{error}</ErrorMsg>}
              <SubmitButton
                type="submit"
                isLoading={isLoadingLogin}
                disabled={isDisabled}
              >
                Ingresar
              </SubmitButton>
            </Form>
          </LoginBox>
        </Container>
      </PublicLayout>
    </RouteGuard>
  );
}
