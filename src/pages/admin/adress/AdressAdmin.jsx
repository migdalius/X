import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";
import Navigation from "../../../components/nav/Navigation";

const BackgroundContainer = styled.div`
  width: 100vw;
  height: auto;
  background-color: #eceff1;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1920px;
  height: 100vh;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 50px;
  gap: 10px;
  padding-bottom: 60px;
`;

const LeftContainer = styled.div`
  width: 12%;
  height: 350px;
  background-color: #fff;
`;

const CenterContainer = styled.div`
  width: 40%;
  height: 800px;
  background-color: #fff;
`;

const SideBar = styled.div``;
const UserDataContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 5px;
`;
const UserTitle = styled.p`
  font-size: 14px;
`;
const UserEmail = styled.p`
  font-size: 14px;
`;

const Hr = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  padding: 0;
  margin-bottom: 30px;
`;

const UserDashboard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  gap: 5px;
  cursor: pointer;
`;

const UserDashboardItem = styled.div`
  font-size: 14px;
`;

const AdminCenterContainer = styled.div``;

const AdminTextContainer = styled.div`
  margin: 20px;
`;
const AdminTextTitle = styled.h3`
  font-size: 20px;
  padding-bottom: 20px;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  gap: 10px;
  width: 40%;
`;

const InputContainer = styled.input`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 3px;
  height: 40px;
  width: 250px;
`;

const InputSubmit = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #14b8a6;
  border-radius: 3px;
  height: 40px;
  width: 250px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

const LabelContainer = styled.label``;
const AdressAdmin = () => {
  return (
    <div className="app">
      <BackgroundContainer>
        <Navigation />
        <MainContainer>
          <LeftContainer>
            <SideBar>
              <UserDataContainer>
                <UserTitle>Hej "Name"!</UserTitle>
                <UserEmail>nyjepl@gmail.com</UserEmail>
              </UserDataContainer>
              <Hr />
              <UserDashboard>
                <UserDashboardItem>Moje zamówienia</UserDashboardItem>
                <UserDashboardItem>Adres dostawy</UserDashboardItem>
                <UserDashboardItem>Koszyk</UserDashboardItem>
                <UserDashboardItem>Kontakt</UserDashboardItem>
                <UserDashboardItem>Wyloguj</UserDashboardItem>
              </UserDashboard>
            </SideBar>
          </LeftContainer>
          <CenterContainer>
            <AdminCenterContainer>
              <AdminTextContainer>
                <AdminTextTitle>Adres Dostawy</AdminTextTitle>
                <FormContainer>
                  <LabelContainer>
                    *Imię:
                    <InputContainer type="text" name="name" />
                  </LabelContainer>
                  <LabelContainer>
                    *Nazwisko:
                    <InputContainer type="text" name="lastName" />
                  </LabelContainer>
                  <LabelContainer>
                    *Telefon:
                    <InputContainer type="text" name="phone" />
                  </LabelContainer>
                  <LabelContainer>
                    Nazwa firmy:
                    <InputContainer type="text" name="company" />
                  </LabelContainer>
                  <LabelContainer>
                    NIP:
                    <InputContainer type="text" name="nip" />
                  </LabelContainer>
                  <LabelContainer>
                    *Ulica i nr domu:
                    <InputContainer type="text" name="street" />
                  </LabelContainer>
                  <LabelContainer>
                    *Kod pocztowy:
                    <InputContainer type="text" name="zip" />
                  </LabelContainer>
                  <LabelContainer>
                    *Miasto:
                    <InputContainer type="text" name="city" />
                  </LabelContainer>
                  <LabelContainer>
                    Kraj:
                    <InputContainer type="text" name="country" />
                  </LabelContainer>
                  <InputSubmit type="submit" value="Zapisz" />
                </FormContainer>
              </AdminTextContainer>
            </AdminCenterContainer>
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default AdressAdmin;
