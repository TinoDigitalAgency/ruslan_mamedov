import { FC } from "react";
import styled from "styled-components";
import { StyledButton, ButtonProps } from "../Button";
import { BiChevronRight } from "react-icons/bi";

const StyledSignInButton = styled(StyledButton)`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  height: 44px;
  text-transform: none;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  transition: 0.3s ease-in-out;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const SignInButton: FC<ButtonProps> = ({ children }) => {
  return (
    <StyledSignInButton>
      Sign in
      <BiChevronRight fontSize={"1.8rem"} />
    </StyledSignInButton>
  );
};

export default SignInButton;
