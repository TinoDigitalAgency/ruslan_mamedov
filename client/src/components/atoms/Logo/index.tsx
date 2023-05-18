import { FC } from "react";
import { Link, To } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../../../../public/images/logo.png";

type LogoProps = {
  link: To;
};

const StyledLogo = styled.div`
  height: 42px;
  width: 150px;
  mix-blend-mode: difference;
  background: url(${LogoImage}) no-repeat;

  cursor: pointer;
`;

const Logo: FC<LogoProps> = ({ link }) => {
  return (
    <Link to={link}>
      <StyledLogo />
    </Link>
  );
};

export default Logo;
