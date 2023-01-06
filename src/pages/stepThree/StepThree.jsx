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
  height: 170px;
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
`;

const FourthContainer = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ButtonContainer = styled.button`
  background-color: #fff;
  width: 140px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const ButtonImageContainer = styled.button`
  width: 120px;
  height: 90px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
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

const Line = styled.hr`
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  border: none;
  border-bottom: 1px solid #08284a;
`;

const IconsImg = styled.img`
  width: 50px;
  height: 50px;
`;
const StepThree = () => {
  return (
    <div className="app">
      <Navigation />
      <MainContainer>
        <Container>
          <TopBar step={"3"} />
          <SecondContainer>
            <SecondTitle>Jaką sylwetkę ma "name"?</SecondTitle>
            <TwoIconsContainer>
              <ButtonContainer>
                <p>Za chuda</p>
              </ButtonContainer>
              <ButtonContainer>
                <p>Idealna</p>
              </ButtonContainer>
            </TwoIconsContainer>
            <TwoIconsContainer>
              <ButtonContainer>
                <p>Lekko zaokrąglona</p>
              </ButtonContainer>
              <ButtonContainer>
                <p>Otyła</p>
              </ButtonContainer>
            </TwoIconsContainer>
          </SecondContainer>
          <Line />
          <SecondContainer>
            <SecondTitle>Jaki "name" ma apetyt?</SecondTitle>
            <TwoIconsContainer>
              <ButtonContainer>
                <p>Wybredny</p>
              </ButtonContainer>
              <ButtonContainer>
                <p>Jest Niejadkiem</p>
              </ButtonContainer>
            </TwoIconsContainer>
            <TwoIconsContainer>
              <ButtonContainer>
                <p>Ładnie je</p>
              </ButtonContainer>
              <ButtonContainer>
                <p>Pochłania Wszystko</p>
              </ButtonContainer>
            </TwoIconsContainer>
          </SecondContainer>
          <Line />
          <ThirdContainer>
            <SecondTitle>Jak aktywny jest "name"?</SecondTitle>
            <TwoIconsContainer>
              <ButtonImageContainer>
                <p>Śpioch</p>
                <IconsImg src="../img/icons/sleep.png" />
              </ButtonImageContainer>
              <ButtonImageContainer>
                <p>Trochę aktywny</p>
                <IconsImg src="../img/icons/pelny_energii.png" />
              </ButtonImageContainer>
            </TwoIconsContainer>
            <TwoIconsContainer>
              <ButtonImageContainer>
                <p>Aktywny</p>
                <IconsImg src="../img/icons/smycz.png" />
              </ButtonImageContainer>
              <ButtonImageContainer>
                <p>Bardzo aktywny</p>
                <IconsImg src="../img/icons/bieganie.png" />
              </ButtonImageContainer>
            </TwoIconsContainer>
          </ThirdContainer>

          <FourthContainer>
            <Link to="/krok-4" className="STEP__link-button">
              <NextButton />
            </Link>
          </FourthContainer>
        </Container>
      </MainContainer>
    </div>
  );
};

export default StepThree;
