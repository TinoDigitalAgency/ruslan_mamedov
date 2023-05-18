import { FC } from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo";
import NavBtnGroup from "../../molecules/NavBtnGroup";
import NavMenu from "../../molecules/NavMenu";

const StyledHeader = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header: FC = () => {
  return (
    <StyledHeader>
      <Logo link={"#"} />
      <NavMenu />
      <NavBtnGroup />
    </StyledHeader>
  );
};

export default Header;
