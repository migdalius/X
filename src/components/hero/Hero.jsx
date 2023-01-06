import { Link } from "react-router-dom";
import styled from "styled-components";
const MainContainer = styled.div`
  width: 100%;
  height: 90vh;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;
`;

const BackgroundImage = styled.div`
  width: 1920px;
  height: 820px;
  background-image: url("http://localhost:3000/img/bg-hero.png");
`;

const TitleContainer = styled.h1`
  color: #222;
  font-size: 56px;
  margin: 40px;
`;

const DescriptionContainer = styled.p`
  width: 500px;
  font-size: 20px;
  margin: 40px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 200px 200px;
  width: 50%;
  height: 800px;
  background-color: #f3f4f6;
  margin: 30px;
  border-radius: 10px;
`;

const DescContainer = styled.div`
  width: 50%;
  height: auto;
`;

const SingleCard = styled.div``;

const HeroBg = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Hero = () => {
  return (
    <MainContainer>
      <ImageContainer>
        <BackgroundImage>
          <HeroBg>
            <DescContainer>
              <TitleContainer>Co chcesz zacząć uprawiać?</TitleContainer>
              <DescriptionContainer>
                Wybierz rodzaj rośliny który cię interesuje?
              </DescriptionContainer>
            </DescContainer>
            <CardContainer></CardContainer>
          </HeroBg>
        </BackgroundImage>
      </ImageContainer>
    </MainContainer>
  );
};

export default Hero;
