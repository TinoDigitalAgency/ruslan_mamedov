import { FC, ReactNode } from "react";
import styled from "styled-components";

type TitleProps = {
  font?: string;
  children: ReactNode;
  size?: string;
  color?: string;
  margin?: string;
};

const StyledTitle = styled.span<TitleProps>`
  font-family: ${(props) => (props?.font ? props.font : "Instrument Sans")};
  font-size: ${(props) => (props?.size ? props.size : "1.5rem")};
  font-style: normal;
  font-weight: 700;
  color: ${(props) => (props?.color ? props.color : "rgba(30, 30, 30, 1)")};
  margin: ${(props) => (props?.margin ? props.margin : "0")};
  text-overflow: inherit;

  display: flex;
  align-items: center;
  text-align: initial;
`;

const Title: FC<TitleProps> = ({ children, ...props }) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};

export default Title;
