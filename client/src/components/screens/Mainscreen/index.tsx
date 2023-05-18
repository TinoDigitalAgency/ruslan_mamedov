import { FC } from "react";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Title from "../../atoms/Title";
import Icon from "../../atoms/Icon";

const StyledMainscreen = styled.div`
  display: flex;
`;

const StyledLeftSection = styled.div`
  flex-grow: 1;
  width: 50%;
`;

const StyledRightSection = styled.div`
  flex-grow: 1;
  width: 50%;
`;

const StyledBenefits = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 32px 0 0;
`;

const StyledSearchbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
  box-shadow: 0px 24px 40px rgba(21, 26, 37, 0.1);
  border-radius: 36px;
  width: 508px;
  height: 72px;
  margin: 32px 0 0;
`;

const StyledLoanImage = styled.img`
  src: "";
`;

const StyledLoanContainer = styled.div`
  margin: 50px 0 0;
  background: #c7c7c7;
`;

const StyledProsSection = styled.div``;

const Mainscreen: FC = () => {
  return (
    <StyledMainscreen>
      <StyledLeftSection>
        <Text
          color="rgba(109, 179, 83, 1)"
          size="1.1rem"
          weight="500"
          margin="43px 0 0"
        >
          <Icon img="/images/icons/undergrad.png" /> Undergraduate Student Loan
        </Text>
        <Title color="rgba(21, 26, 37, 1)" size="3rem" margin="12px 0 0">
          Automate your search for the best private student loan
        </Title>
        <Text
          color="rgba(21, 27, 38, 1)"
          size="1rem"
          weight="500"
          margin="24px 90px 0 0"
        >
          Pre-qualify with 17+ student lenders across the U.S. through a single,
          three minute form.
        </Text>
        <StyledSearchbar>
          <Text>Pseudo-search section</Text>
        </StyledSearchbar>
        <StyledBenefits>
          <Text weight="600" margin="5px 0">
            <Icon img="/images/icons/check_s.png" height="16px" width="16px" />
            100% free
          </Text>
          <Text weight="600" margin="5px 0">
            <Icon img="/images/icons/check_s.png" height="16px" width="16px" />
            No credit score impact
          </Text>
          <Text weight="600" margin="5px 0">
            <Icon img="/images/icons/check_s.png" height="16px" width="16px" />
            $0 in-school payments
          </Text>
          <Text weight="600" margin="5px 0">
            <Icon img="/images/icons/check_s.png" height="16px" width="16px" />
            Real pre-qualified rates
          </Text>
        </StyledBenefits>
      </StyledLeftSection>
      <StyledRightSection>
        <StyledLoanContainer>
          <StyledLoanImage src="/images/illustration.png" />
        </StyledLoanContainer>
        <Text justifyContent="end" color="#9EA9B0">
          Illustrative purposes, actual results may vary.
        </Text>
        <Text justifyContent="end" color="#9EA9B0">
          Pre-qualified rates are not a firm offer of credit.
          <Icon
            img="public/images/icons/Vector.svg"
            width="14px"
            height="14px"
          />
        </Text>
      </StyledRightSection>
    </StyledMainscreen>
  );
};

export default Mainscreen;
