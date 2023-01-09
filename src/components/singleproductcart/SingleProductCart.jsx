import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const ProductContainer = styled.div`
  display: flex;
  width: 80%;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;

  &:hover {
    background-color: #eeeeee;
  }
`;

const ImageContainer = styled.div`
  width: 25%;
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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

const SingleProductTitle = styled.h3``;
const SingleProductWeight = styled.span`
  font-size: 12px;
`;
const SingleProductPrice = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #222;
`;

const DeliveryTime = styled.p`
  color: #1bb828;
`;

const ProducerContainer = styled.div``;
const ProducerLogo = styled.img`
  width: 60px;
`;

const AddProductContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
`;
const PositivelyButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 3px;
  color: #14b8a6;
  cursor: pointer;
`;
const CounterInput = styled.input`
  width: 50px;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 3px;
  background-color: #fff;
  font-size: 16px;
`;
const NegativeButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 3px;
  color: #14b8a6;
  cursor: pointer;
  font-size: 16px;
`;
const BuyButton = styled.button`
  background-color: #14b8a6;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const SingleProductCart = () => {
  return (
    <ProductContainer>
      <ImageContainer>
        <ThumbNail src="../img/testproduct/bazylia_cytrynowa.jpg" />
      </ImageContainer>
      <DescContainer>
        <SingleProductTitle>
          Spodnie robocze Ardon Vision r. 50
        </SingleProductTitle>
        <SingleProductWeight>
          waga: <stron>10g</stron>
        </SingleProductWeight>
        <SingleProductPrice>189,98 zł</SingleProductPrice>
        <DeliveryTime>Kup do 13:00 - wysyłka jeszcze dziś!</DeliveryTime>
      </DescContainer>

      <BuyContainer>
        <ProducerContainer>
          <ProducerLogo src="../img/products/logo.jpg" />
        </ProducerContainer>
        <AddProductContainer>
          <PositivelyButton>+</PositivelyButton>
          <CounterInput />
          <NegativeButton>-</NegativeButton>
        </AddProductContainer>
        <BuyButton>Dodaj do koszyka</BuyButton>
      </BuyContainer>
    </ProductContainer>
  );
};

export default SingleProductCart;
