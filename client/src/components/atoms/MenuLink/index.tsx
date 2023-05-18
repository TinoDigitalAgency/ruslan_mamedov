import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Link, To } from "react-router-dom";

type MenuLinkProps = {
  children: ReactNode;
  link: To;
};

const StyledMenuLink = styled.li`
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(21, 27, 38, 1);
  margin: 0 2rem;
  position: relative;
  padding: 4px 0;
  user-select: none;

  &:hover {
    &::before {
      transform: scaleX(1);
    }
  }
`;

const MenuLink: FC<MenuLinkProps> = ({ children, link }) => {
  return (
    <StyledMenuLink>
      <Link to={link}>{children}</Link>
    </StyledMenuLink>
  );
};

export default MenuLink;
