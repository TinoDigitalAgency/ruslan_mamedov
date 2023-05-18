import { FC, ReactNode } from "react";
import styled from "styled-components";

export interface ButtonProps {
  children?: ReactNode;
  onClick?: (e?: any) => void;
}

export const StyledButton = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: "center";
  width: 100%;
  min-width: max-content;
  height: 3.5rem;
  cursor: pointer;
  user-select: none;
  padding: 0 24px;

  /* Font */
  font-style: bold;
  font-weight: 600;
  font-size: 1.2rem;
  color: white;

  background: #8cce56;
  border-radius: 28px;
`;

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
