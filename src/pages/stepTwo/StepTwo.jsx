import Navigation from "../../components/nav/Navigation";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styled, { keyframes } from "styled-components";
import TopNav from "../../components/topNav/TopNav";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1920px;
  height: auto;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 50px;
  gap: 10px;
`;

const LeftContainer = styled.div`
  width: 15%;
  height: 500px;
  background-color: #fff;
`;

const CenterContainer = styled.div`
  width: 60%;
  height: 500px;
  background-color: #fff;
`;

const BackgroundContainer = styled.div`
  background-color: #eceff1;
  width: 100vw;
  height: 100vh;
`;

const ProductContainer = styled.div`
  display: flex;
  width: 80%;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;

  &:hover {
    background-color: #eeeeee;
  }
`;

const ImageContainer = styled.div`
  width: 25%;
`;

const DescContainer = styled.div`
  width: 50%;
`;

const BuyContainer = styled.div`
  width: 25%;
`;

const ThumbNail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const StepTwo = () => {
  const name = useSelector((state) => state.user.name);
  return (
    <div className="app">
      <BackgroundContainer>
        <Navigation />
        <MainContainer>
          <LeftContainer></LeftContainer>
          <CenterContainer>
            <TopNav />
            <div> fota kategori i opis kategorii</div>
            <ProductContainer>
              <ImageContainer>
                <ThumbNail src="../img/testproduct/bazylia_cytrynowa.jpg" />
              </ImageContainer>
              <DescContainer>tytuł,waga,cena</DescContainer>
              <BuyContainer>logo,desc,dodaj do koszyka,+-</BuyContainer>
            </ProductContainer>
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
    </div>
  );
};

export default StepTwo;
