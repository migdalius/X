import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import NextButton from "../../components/buttons/NextButton";
import Navigation from "../../components/nav/Navigation";
import TopBar from "../../components/steps/TopBar";
import { update } from "../../redux/userSlice";

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

// Details

const SecondTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

const InputOne = styled.input`
  width: 60%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Line = styled.hr`
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  border: none;
  border-bottom: 1px solid #08284a;
`;

const TwoIconsContainer = styled.div`
  display: flex;
  padding-top: 10px;
  gap: 50px;
`;

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 90px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

const Icons = styled.img`
  width: 60px;
  height: 60px;
`;
const Paragraph = styled.p`
  font-size: 12px;
`;

const SmallInput = styled.input`
  border: 1px solid #ddd;
  width: 50px;
  height: 30px;
  border-radius: 5px;
`;

const FirstContainer = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
`;

const FourthContainer = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StepOne = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handelUpdate = (e) => {
    e.preventDefault();
    dispatch(update({ name }));
    console.log(e);
  };

  console.log(name);
  return (
    <div className="app">
      <Navigation />
      <MainContainer>
        <Container>
          <TopBar step={"1"} start={"16%"} />
          <FirstContainer>
            <SecondTitle>Jak sie nazywa twój kotek/piesek?</SecondTitle>
            <InputOne onChange={(e) => setName(e.target.value)} />
          </FirstContainer>
          <Line />
          <SecondContainer>
            <SecondTitle>Jakiej płci jest twój piesek?</SecondTitle>
            <TwoIconsContainer>
              <ButtonContainer>
                <Icons src="../img/icons/chlopak.png" />
                <Paragraph>Chłopak</Paragraph>
              </ButtonContainer>
              <ButtonContainer>
                <Icons src="../img/icons/dziewczyna.png" />
                <Paragraph>Dziewczyna</Paragraph>
              </ButtonContainer>
            </TwoIconsContainer>
          </SecondContainer>
          <Line />
          <ThirdContainer>
            <SecondTitle>W jakim wieku jest "name"</SecondTitle>
            <div>
              ma <SmallInput />
              lat i <SmallInput /> miesiący
            </div>
          </ThirdContainer>
          <Line />
          <FourthContainer>
            <Link to="/krok-2" className="STEP__link-button">
              <NextButton onClick={handelUpdate} />
            </Link>
          </FourthContainer>
        </Container>
      </MainContainer>
    </div>
  );
};

export default StepOne;
