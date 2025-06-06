import { FiLogOut } from "react-icons/fi";
import { Loader } from "../loader/Loader";
import { CustomButtonRoot } from "./CustomButton.styled";

type CustomButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
  isLogout?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CustomButton = ({
  children,
  onClick,
  title,
  type,
  disabled,
  className,
  isLoading,
  isLogout,
}: CustomButtonProps) => {
  return (
    <CustomButtonRoot
      onClick={onClick}
      title={title}
      type={type}
      disabled={disabled}
      className={className}
      isLoading={isLoading}
      isLogout={isLogout}
    >
      {isLoading && <Loader role="status" data-testid="loader" />}
      {isLogout && (
        <FiLogOut className="logout-icon" data-testid="logout-icon" />
      )}
      <span className="button-text">{children}</span>
    </CustomButtonRoot>
  );
};
