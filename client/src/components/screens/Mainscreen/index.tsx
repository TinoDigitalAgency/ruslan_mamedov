import { FC } from "react";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Title from "../../atoms/Title";
import Icon from "../../atoms/Icon";
import Searchbar from "../../organisms/Searchbar";

const StyledMainscreen = styled.div`
  display: flex;
`;

const StyledLeftSection = styled.div`
  flex-grow: 1;
  width: 50%;
  box-sizing: border-box;
`;

const StyledRightSection = styled.div`
  flex-grow: 1;
  width: 50%;
  box-sizing: border-box;
`;

const StyledBenefits = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 32px 0 0;
`;

const StyledLoanContainer = styled.div`
  margin: 100px 0 0;
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const StyledLoanBox = styled.div`
  background: white;
  border-radius: 16px;
  width: 420px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 30px 25px;

  margin-bottom: 12px;

  &.special-background {
    justify-content: initial;
    flex-direction: column;
    border: 0.5px solid white;
    background: linear-gradient(
      rgba(44, 168, 44, 0.705) 52.94%,
      rgba(114, 233, 120, 0.747) 100%
    );
  }
`;

const StyledLoanCondition = styled.div`
  margin-left: 15px;
`;

const Mainscreen: FC = () => {
  return (
    <StyledMainscreen className="styled-main-screen">
      <StyledLeftSection className="styled-left-section">
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
        <Searchbar />
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
      <StyledRightSection className="styled-right-section">
        <StyledLoanContainer className="styled-loan-container">
          <StyledLoanBox className="styled-loan-box">
            <Icon img="/images/icons/dolar-sign.png" />
            <StyledLoanCondition>
              <Title size="1rem">Loan size</Title>
              <Text size="0.8rem">$15,000</Text>
            </StyledLoanCondition>
          </StyledLoanBox>
          <StyledLoanBox className="styled-loan-box">
            <Icon img="/images/icons/flag-sign.png" />
            <StyledLoanCondition>
              <Title size="1rem">Citizenship status</Title>
              <Text size="0.8rem">U.S. citizen or national</Text>
            </StyledLoanCondition>
          </StyledLoanBox>
          <StyledLoanBox className="styled-loan-box special-background">
            <div className="loan-preview">
              <Icon img="/images/icons/open-book-icon.png" />
              <StyledLoanCondition>
                <Title size="1rem" color="white">
                  Stanford University
                </Title>
                <Text size="0.8rem" color="white">
                  B.S | Management Science and Engineering
                </Text>
              </StyledLoanCondition>
            </div>
            <div className="loan-status">
              <Text size="0.8rem" color="white">
                Enrollment status
              </Text>
              <Text size="0.8rem" color="white">
                Full time
              </Text>
            </div>
            <div className="loan-status">
              <Text size="0.8rem" color="white">
                Graduation date
              </Text>
              <Text size="0.8rem" color="white">
                June 2025
              </Text>
            </div>
          </StyledLoanBox>
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
      <div className="green-background">
        <img src="/images/Green-background.png" alt="" />
      </div>
    </StyledMainscreen>
  );
};

export default Mainscreen;
