import { FC } from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo";
import NavBtnGroup from "../../molecules/NavBtnGroup";
import NavMenu from "../../molecules/NavMenu";
import MenuLink from "../../atoms/MenuLink";
import SignInButton from "../../atoms/SignInButton";

const StyledHeader = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header: FC = () => {
  return (
    <StyledHeader className="styled-header">
      <Logo link={"#"} />
      <NavMenu />
      <NavBtnGroup  />
      {
        <div className="a-header burger-container">
          <input
            type="checkbox"
            name="main-nav"
            id="main-nav"
            className="burger-check"
          />
          <label htmlFor="main-nav" className="burger menu">
            <span></span>
          </label>
          <ul>
            <li>
              <MenuLink link="/">Products</MenuLink>
            </li>
            <li>
              <MenuLink link="/">Company</MenuLink>
            </li>
            <li>
              <a>
                <SignInButton />
              </a>
            </li>
          </ul>
        </div>
      }
    </StyledHeader>
  );
};

export default Header;
