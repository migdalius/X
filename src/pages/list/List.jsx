import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Navigation from "../../components/nav/Navigation";
import Product from "../../components/product/Product";

const MainContainer = styled.div`
  background-image: url("http://localhost:3000/img/bg.jpg");
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const Content = styled.div`
  display: flex;
  width: 1400px;
  height: auto;
  gap: 20px;
`;

const Filter = styled.div`
  width: 30%;
  height: 800px;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid #ddd;
`;

const FilterTitle = styled.h3`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ListAll = styled.ul``;

const ListSingle = styled.li`
  list-style: none;
  margin-bottom: 5px;
  font-size: 18px;
`;

const ListContainer = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Products = styled.div`
  width: 70%;
  height: auto;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid #ddd;
`;

const ProductNavigation = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  background-color: #fff;
  margin-bottom: 10px;
`;

const ProductNavigationDescription = styled.div`
  width: 70%;
  margin: 15px;
`;
const ProductNavigationAnimalProfil = styled.div`
  width: 30%;
`;

const Profil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 120px;
`;

const Line = styled.hr`
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  border: none;
  border-bottom: 1px solid #08284a;
`;

const ChoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 30px;
  gap: 10px;
  font-size: 20px;
`;
const Label = styled.label`
  font-size: 18px;
`;

const Input = styled.input``;
const List = () => {
  return (
    <div>
      <Navigation />
      <MainContainer>
        <Content>
          <Filter>
            <FilterTitle>Filtrowanie Produktów</FilterTitle>
            <Line />
            <ListContainer>
              <ListAll>
                <ListSingle>Sucha karma</ListSingle>
                <ListSingle>Mokra karma</ListSingle>
                <ListSingle>Przysmaki</ListSingle>
                <ListSingle>Dieta BARF</ListSingle>
                <ListSingle>Dieta Gotowana</ListSingle>
              </ListAll>
            </ListContainer>
            <Line />
            <ChoiceContainer>
              <Label>
                <Input type="radio" name="food" /> Piesek
              </Label>
              <Label>
                <Input type="radio" name="food" /> Kotek
              </Label>
            </ChoiceContainer>
            <Line />
            <ChoiceContainer>
              <Label>
                <Input type="radio" name="food" /> Kurczak
              </Label>
              <Label>
                <Input type="radio" name="food" /> Wołowina
              </Label>
              <Label>
                <Input type="radio" name="food" /> Ryby
              </Label>
              <Label>
                <Input type="radio" name="food" /> Cielęcina
              </Label>
            </ChoiceContainer>
          </Filter>
          <Products>
            <ProductNavigation>
              <ProductNavigationDescription>
                <strong>Karma dla psa</strong> Wraz z rosnącą liczbą zwierząt
                domowych i coraz większą świadomością ludzi na temat żywienia
                swoich pupili, nastąpił ogromny wzrost popytu na karmę dla psa.
                Od razu pojawiają się pytania: jaka karma dla psa? Czy ma to być
                wersja mokra i miękka, a może przeciwnie - twarda i sucha?
              </ProductNavigationDescription>
              <ProductNavigationAnimalProfil>
                <Profil>
                  <MenuContainer>
                    <select name="pets" id="pet-select">
                      <option value="dog">Herkules</option>
                      <option value="cat">Misia</option>
                      <option value="hamster">Dino</option>
                      <option value="parrot">Dodaj nowe zwierzątko</option>
                    </select>
                  </MenuContainer>
                </Profil>
              </ProductNavigationAnimalProfil>
            </ProductNavigation>

            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Products>
        </Content>
      </MainContainer>
    </div>
  );
};

export default List;
