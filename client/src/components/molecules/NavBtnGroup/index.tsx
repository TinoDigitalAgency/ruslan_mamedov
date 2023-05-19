import { FC } from "react";
import Button from "../../atoms/Button";
import styled from "styled-components";
import SignInButton from "../../atoms/SignInButton";

const StyledBtnGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavBtnGroup: FC = () => {
  return (
    <StyledBtnGroup className="styled-button-group">
      <SignInButton />
    </StyledBtnGroup>
  );
};

export default NavBtnGroup;
