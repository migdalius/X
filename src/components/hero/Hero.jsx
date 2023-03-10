import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 1920px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BackgroundImage = styled.div`
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  height: 87vh;
  background-image: url("http://localhost:3000/img/bg-hero.png");
  border-radius: 0px 0px 20px 20px;
  position: relative;

  @media (max-width: 1740px) {
    width: 90vw;
    height: 80vh;
  }
`;

const TitleContainer = styled.h1`
  color: #fff;
  font-size: 56px;
  margin: 40px;
  width: 600px;
`;

const DescriptionContainer = styled.p`
  width: 500px;
  font-size: 24px;
  margin: 40px;
  color: #fff;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 250px;
  width: 50%;
  height: 800px;
  margin: 30px;
  border-radius: 10px;
  margin-top: 120px;
  gap: 10px;
`;

const DescContainer = styled.div`
  width: 50%;
  height: auto;
  margin: 50px;
`;

const SingleCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border: 7px solid #14b8a6;
  }
`;

const HeroBg = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const SingleCardTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const SingleCardImage = styled.img`
  height: 130px;
`;

const ArrowImage = styled.img`
  height: 300px;
  position: absolute;
  left: 500px;
  top: 190px;
`;

const SecondBaner = styled.div`
  width: 1300px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  bottom: 80px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
`;

const SecondBanerItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const ItemIcons = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;
const ItemTitle = styled.h2`
  font-size: 28px;
  color: #222;
`;
const ItemDesc = styled.p`
  margin: 15px;
  font-size: 16px;
  color: #222;
`;
const Hero = () => {
  return (
    <MainContainer>
      <ImageContainer>
        <BackgroundImage>
          <HeroBg>
            <DescContainer>
              <TitleContainer>Co chcesz zacz???? uprawia???</TitleContainer>
              <DescriptionContainer>
                Wybierz rodzaj ro??liny kt??ry ci?? interesuje?
              </DescriptionContainer>

              <ArrowImage src="../img/right-arrow.png" />
            </DescContainer>
            <CardContainer>
              <SingleCard>
                <Link to={"/krok-1"}>
                  <SingleCardImage src="../img/cat/ziola.png" />
                  <SingleCardTitle>Zio??a</SingleCardTitle>
                </Link>
              </SingleCard>
              <SingleCard>
                <SingleCardImage src="../img/cat/kwiaty.png" />
                <SingleCardTitle>Kwiaty</SingleCardTitle>
              </SingleCard>
              <SingleCard>
                <SingleCardImage src="../img/cat/sukulenty.png" />
                <SingleCardTitle>Sukulenty</SingleCardTitle>
              </SingleCard>
              <SingleCard>
                <SingleCardImage src="../img/cat/chilis.png" />
                <SingleCardTitle>Papryki chili</SingleCardTitle>
              </SingleCard>
              <SingleCard>
                <SingleCardImage src="../img/cat/pomidory.png" />
                <SingleCardTitle>Warzywa</SingleCardTitle>
              </SingleCard>
              <SingleCard>
                <SingleCardImage src="../img/cat/pomidory.png" />
                <SingleCardTitle>Owoce</SingleCardTitle>
              </SingleCard>
              <SingleCard>
                <SingleCardImage src="../img/cat/pomidory.png" />
                <SingleCardTitle>Kie??ki</SingleCardTitle>
              </SingleCard>
              <SingleCard>
                <SingleCardImage src="../img/cat/bonsai.png" />
                <SingleCardTitle>Bonsai</SingleCardTitle>
              </SingleCard>
            </CardContainer>
          </HeroBg>
        </BackgroundImage>
      </ImageContainer>
      <SecondBaner>
        <SecondBanerItem>
          <ItemIcons src="../img/cat/uprawa.png" />
          <ItemTitle>Uprawa Domowa</ItemTitle>
          <ItemDesc>
            Nie ka??dy rodzaj ro??liny nadaje si?? do uprawy domowej, skorzystaj z
            generatora, ??eby zaoszcz??dzi?? czas.
          </ItemDesc>
        </SecondBanerItem>
        <SecondBanerItem>
          <ItemIcons src="../img/cat/garden.png" />
          <ItemTitle>Uprawa w Ogrodzie</ItemTitle>
          <ItemDesc>
            Wybierz dogodny termin rozpocz??cia uprawy, dzi??ki generatorowi
            zaoszcz??dzisz czas na szukaniu produkt??w sezonowych.
          </ItemDesc>
        </SecondBanerItem>
        <SecondBanerItem>
          <ItemIcons src="../img/cat/instruction.png" />
          <ItemTitle>Instrukcje Uprawy</ItemTitle>
          <ItemDesc>
            Do ka??dego zam??wienia otrzymujesz autorskie instrukcje opisuj??ce
            sadzenie, przesadzanie i piel??gnacje wybranych ro??lin.
          </ItemDesc>
        </SecondBanerItem>
      </SecondBaner>
    </MainContainer>
  );
};

export default Hero;
