import { FC, ReactNode } from "react";
import styled from "styled-components";

type TextProps = {
  font?: string;
  children: ReactNode;
  size?: string;
  color?: string;
  weight?: string;
  margin?: string;
  textAlign?: string;
  justifyContent?: string;
};

export const StyledText = styled.span<TextProps>`
  font-family: ${(props) => (props?.font ? props.font : "Instrument Sans")};
  font-size: ${(props) => (props?.size ? props.size : "1rem")};
  font-style: normal;
  font-weight: ${(props) => (props?.weight ? props.weight : "300")};
  text-overflow: inherit;
  color: ${(props) => (props?.color ? props.color : "rgba(21, 27, 38, 1)")};
  margin: ${(props) => (props?.margin ? props.margin : "rgba(21, 27, 38, 1)")};
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props?.justifyContent ? props.justifyContent : "normal"};
  text-align: ${(props) => (props?.textAlign ? props.textAlign : "initial")};
`;

const Text: FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
