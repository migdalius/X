import "../nav/navigation.css";

import styled from "styled-components";
import { Basket3, PersonCircle, Search } from "react-bootstrap-icons";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: #0d9488;
  height: 100px;
  color: #fff;
  border-bottom: 1px solid #ddd;
`;

const SearchSection = styled.div`
  width: 650px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const UserDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #ddd;
  background-color: #f3f4f6;
`;

const CategoryList = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryItemList = styled.li`
  list-style: none;
  font-weight: 700;
  font-size: 16px;
`;

const Navigation = () => {
  return (
    <>
      <MainContent>
        Projekt X
        <SearchSection>
          <input
            type="text"
            placeholder="Szukaj..."
            className="Nav__searchBar"
          />
          <Search color="#0d9488" size={20} className="Nav__searchIcon" />
        </SearchSection>
        <UserContainer>
          <div>
            <Basket3 color="#fff" size={24} />
          </div>
          <UserDetail>
            <div>
              <PersonCircle color="#fff" size={24} />
            </div>
            <p>Moje konto</p>
          </UserDetail>
        </UserContainer>
      </MainContent>
      <CategoryContainer>
        <CategoryList>
          <CategoryItemList>Domowa Uprawa</CategoryItemList>
          <CategoryItemList>Uprawa w Ogrodzie</CategoryItemList>
          <CategoryItemList>Uprawa Hydroponiczna</CategoryItemList>
          <CategoryItemList>Uprawa w Szklarni</CategoryItemList>
        </CategoryList>
      </CategoryContainer>
    </>
  );
};

export default Navigation;
