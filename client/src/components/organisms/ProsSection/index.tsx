import { FC } from "react";
import styled from "styled-components";
import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import Title from "../../atoms/Title";

const StyledProsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 80px 0 0 0;
`;

const StyledProsContainer = styled.div`
  padding: 0 50px 0 10px;
  position: relative;

  ::before {
    position: absolute;
    left: -5px;
    top: 45%;
    height: 80px;
    background: linear-gradient(180deg, #6db353 0%, rgba(109, 179, 83, 0) 100%);
    width: 2px;
    content: " ";
  }
`;

const ProsSection: FC = () => {
  return (
    <StyledProsSection>
      <StyledProsContainer>
        <Icon img="public\images\icons\cosigner.png" />
        <Title size="1rem" margin="10px 0 0">
          No cosigner, no problem
        </Title>
        <Text size="1rem">You may pre-qualify with or without a cosigner.</Text>
      </StyledProsContainer>
      <StyledProsContainer>
        <Icon img="public\images\icons\income.png" />
        <Title size="1rem" margin="10px 0 0">
          No income necessary
        </Title>
        <Text size="1rem">
          You’re not required to have income to submit a request.{" "}
        </Text>
      </StyledProsContainer>
      <StyledProsContainer>
        <Icon img="public\images\icons\credit_history.png" />
        <Title size="1rem" margin="10px 0 0">
          No credit history needed
        </Title>
        <Text size="1rem">
          You’re not expected to have years’ worth of credit history.
        </Text>
      </StyledProsContainer>
      <StyledProsContainer>
        <Icon img="public\images\icons\timer.png" />
        <Title size="1rem" margin="10px 0 0">
          Pre-qualify quickly
        </Title>
        <Text size="1rem">
          Pre-qualification within 20 seconds of submission.
        </Text>
      </StyledProsContainer>
    </StyledProsSection>
  );
};

export default ProsSection;
