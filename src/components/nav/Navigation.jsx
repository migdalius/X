import "../nav/navigation.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Basket3, PersonCircle, Search } from "react-bootstrap-icons";
import DropDown from "../dropdown/DropDown";
import { useState } from "react";
import DropDownShopCart from "../dropdownshopcart/DropDownShopCart";

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
  cursor: pointer;
  overflow: hidden;
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
  const [open, setOpen] = useState(false);
  const [shopCartOpen, setShopCartOpen] = useState(false);
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <>
      <MainContent>
        Projekt X
        <SearchSection>
          <input
            type="text"
            placeholder="Szukaj..."
            onChange={(e) => setQuery(e.target.value)}
            className="Nav__searchBar"
          />
          <Search color="#0d9488" size={20} className="Nav__searchIcon" />
        </SearchSection>
        <UserContainer>
          <div
            className="menu-container"
            onClick={() => {
              setShopCartOpen(!shopCartOpen);
            }}
          >
            <div className="menu-trigger">
              <div>
                <Basket3 color="#fff" size={35} className="shopping-cart" />
                <div className="shopping-circle">20</div>
              </div>
            </div>
            <div
              className={`dropdown-shopping-cart ${
                shopCartOpen ? "active" : "inactive"
              }`}
            >
              <ul>
                <DropDownShopCart />
              </ul>
            </div>
          </div>
          <div
            className="menu-container"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="menu-trigger">
              <UserDetail>
                <div>
                  <PersonCircle color="#fff" size={35} />
                </div>
                <p>Moje konto</p>
              </UserDetail>
            </div>
            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
              <ul>
                <DropDown />
              </ul>
            </div>
          </div>
        </UserContainer>
      </MainContent>
      <CategoryContainer>
        <CategoryList>
          <CategoryItemList>
            <Link>Domowa Uprawa</Link>
          </CategoryItemList>
          <CategoryItemList>
            <Link>Uprawa w Ogrodzie</Link>
          </CategoryItemList>
          <CategoryItemList>
            <Link>Uprawa Hydroponiczna</Link>
          </CategoryItemList>
          <CategoryItemList>
            <Link>Uprawa w Szklarni</Link>
          </CategoryItemList>
        </CategoryList>
      </CategoryContainer>
    </>
  );
};

export default Navigation;
