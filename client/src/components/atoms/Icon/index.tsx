import { FC } from "react";
import styled from "styled-components";

type IconProps = {
  img: string;
  width?: string;
  height?: string;
  padding?: string;
};

const StyledIconContainer = styled.div`
  //Container styles
  padding: 0 5px;
`;

const StyledIcon = styled.img`
  box-sizing: content-box;
  width: ${(props) => (props?.width ? props.width : "40px")};
  height: ${(props) => (props?.height ? props.height : "40px")};
  object-fit: cover;
`;

const Icon: FC<IconProps> = ({ img, ...props }) => {
  return (
    <StyledIconContainer>
      <StyledIcon src={img} {...props} />
    </StyledIconContainer>
  );
};

export default Icon;
