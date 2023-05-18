import { FC } from "react";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";

const StyledSearchbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  box-shadow: 0px 24px 40px rgba(21, 26, 37, 0.1);
  border-radius: 36px;
  height: 72px;
  margin: 32px 60px 0 0;
  padding: 0 62px 0 45px;
`;

const StyledButtonContainer = styled.div`
  width: 80px;
`;

const StyledTextContainer = styled.div`
  opacity: 0.5;
`;

const Searchbar: FC = () => {
  return (
    <StyledSearchbar>
      <StyledTextContainer>
        <Text color="rgba(21, 26, 37, 1)" weight="300">
          How much do you want to borrow?
        </Text>
      </StyledTextContainer>
      <StyledButtonContainer>
        <Button>
          <Icon img="/images/icons/search.png" height="24px" width="24px" />
          <Text weight="500" color="white">
            Search
          </Text>
        </Button>
      </StyledButtonContainer>
    </StyledSearchbar>
  );
};

export default Searchbar;
