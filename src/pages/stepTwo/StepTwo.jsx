import Navigation from "../../components/nav/Navigation";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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

//

const FirstContainer = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 90px;
  border: none;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
`;

const Icons = styled.img`
  width: 60px;
  height: 60px;
`;

const Line = styled.hr`
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  border: none;
  border-bottom: 1px solid #08284a;
`;

const ThirdContainer = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const FourthContainer = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  width: 35%;
  height: 40px;
  border-radius: 5px 0px 0px 5px;
  padding-left: 15px;
`;

const InputKg = styled.input`
  border: 1px solid #ddd;
  border-left: none;
  width: 15%;
  height: 40px;
  border-radius: 0px 5px 5px 0px;
  padding-left: 15px;
`;

const StepTwo = () => {
  const name = useSelector((state) => state.user.name);
  return (
    <div className="app">
      <Navigation />
      <MainContainer>
        <Container>
          <TopBar step={"2"} />
          <FirstContainer>
            <SecondTitle>Czy karma może zawierać cukier?</SecondTitle>
            <TwoIconsContainer>
              <ButtonContainer>
                <Icons src="../img/icons/miska.png" />
                <p>NIE</p>
              </ButtonContainer>
              <ButtonContainer>
                <Icons src="../img/icons/miska_cukier.png" />
                <p>TAK</p>
              </ButtonContainer>
            </TwoIconsContainer>
          </FirstContainer>
          <Line />
          <ThirdContainer>
            <SecondTitle>Jakiej rasy jest {name}</SecondTitle>
            <TwoIconsContainer>
              <ButtonContainer>
                <Icons src="../img/icons/kundelek.png" />
                <p>Kundelek</p>
              </ButtonContainer>
              <ButtonContainer>
                <Icons src="../img/icons/rasowy.png" />
                <p>Rasowy</p>
              </ButtonContainer>
            </TwoIconsContainer>
          </ThirdContainer>
          <Line />
          <ThirdContainer>
            <SecondTitle>Ile waży {name}?</SecondTitle>
            <InputContainer>
              <Input type="number" placeholder="np: 5" />
              <InputKg type="text" placeholder="KG" disabled />
            </InputContainer>
          </ThirdContainer>
          <Line />
          <FourthContainer>
            <Link to="/krok-3" className="STEP__link-button">
              <NextButton />
            </Link>
          </FourthContainer>
        </Container>
      </MainContainer>
    </div>
  );
};

export default StepTwo;
