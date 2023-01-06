import Navigation from "../../components/nav/Navigation";
import { Link } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import TopBar from "../../components/steps/TopBar";
import NextButton from "../../components/buttons/NextButton";

const MainContainer = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

const Container = styled.div`
  width: 650px;
  height: 820px;
  background-color: #f9fafb;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const SecondContainer = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ThirdContainer = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 70px;
  margin-top: 60px;
  margin-bottom: 40px;
`;

const FourthContainer = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SecondTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

const TwoIconsContainer = styled.div`
  display: flex;
  padding-top: 10px;
  gap: 50px;
`;

const IconsImg = styled.img`
  width: 50px;
  height: 50px;
`;

const ButtonImageContainer = styled.button`
  width: 120px;
  height: 90px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;

  &:active {
    border: 3px solid #08284a;
  }
`;

const Line = styled.hr`
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  border: none;
  border-bottom: 1px solid #08284a;
`;

const StepFour = () => {
  return (
    <div className="app">
      <Navigation />
      <MainContainer>
        <Container>
          <TopBar step={"4"} />

          <SecondContainer>
            <SecondTitle>
              Czy "name" ma alegrię lub nietolerancje pokarmową.
            </SecondTitle>
            <TwoIconsContainer>
              <ButtonImageContainer>
                <p>Nie ma alergii</p>
              </ButtonImageContainer>
              <ButtonImageContainer>
                <p>Ma alergię na</p>
              </ButtonImageContainer>
            </TwoIconsContainer>
            {/* <div className="STEP_topBar-desc mr-bottom">
              Zaznacz jednen lub więcej
            </div> */}
            {/* <TwoIconsContainer>
              <label for="test1">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="STEP-input-list"
                />{" "}
                Jagnięcina
              </label>
              <label for="test1">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="STEP-input-list"
                />{" "}
                Indyk
              </label>
            </TwoIconsContainer> */}
            {/* <TwoIconsContainer>
              <label for="test1">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="STEP-input-list"
                />{" "}
                Kurczak
              </label>
              <label for="test1">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="STEP-input-list"
                />{" "}
                Wołowina
              </label>
            </TwoIconsContainer> */}
          </SecondContainer>

          <Line />
          <ThirdContainer>
            <SecondTitle>Jaką karmę lubi "name"?</SecondTitle>
            <TwoIconsContainer>
              <ButtonImageContainer>
                <IconsImg src="../img/icons/karma_1.png" />
                <p>Sucha</p>
              </ButtonImageContainer>
              <ButtonImageContainer>
                <IconsImg src="../img/icons/karma_2.png" />
                <p>Mokra</p>
              </ButtonImageContainer>
            </TwoIconsContainer>
            <TwoIconsContainer>
              <ButtonImageContainer>
                <IconsImg src="../img/icons/karma_3.png" />
                <p>Gotowana żywność</p>
              </ButtonImageContainer>
              <ButtonImageContainer>
                <IconsImg src="../img/icons/karma_4.png" />
                <p>BARF</p>
              </ButtonImageContainer>
            </TwoIconsContainer>
          </ThirdContainer>
          <FourthContainer>
            <Link to="/krok-5" className="STEP__link-button">
              <NextButton />
            </Link>
          </FourthContainer>
        </Container>
      </MainContainer>
    </div>
  );
};

export default StepFour;
