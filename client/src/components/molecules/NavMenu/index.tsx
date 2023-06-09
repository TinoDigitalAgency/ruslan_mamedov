import { FC } from "react";
import styled from "styled-components";
import MenuLink from "../../atoms/MenuLink";

const StyledNavMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavMenu: FC = () => {
  return (
    <StyledNavMenu className="styled-nav-menu">
      <MenuLink link="/">Products</MenuLink>
      <MenuLink link="..">Company</MenuLink>
    </StyledNavMenu>
  );
};

export default NavMenu;
