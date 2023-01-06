import Navigation from "../../components/nav/Navigation";
import { Link } from "react-router-dom";
import TopBar from "../../components/steps/TopBar";
import styled, { keyframes } from "styled-components";
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

const FiveContainer = styled.div`
  height: 500px;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

const ProblemContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const ProblemButton = styled.button`
  width: 150px;
  height: 60px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

const SecondTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
`;
const StepFive = () => {
  return (
    <div className="app">
      <Navigation />
      <MainContainer>
        <Container>
          <TopBar step={"5"} />
          <FiveContainer>
            <SecondTitle>
              Czy "name" jest po "sterylizacji / kastracji"
            </SecondTitle>
            <ProblemContainer>
              <ProblemButton>Nie ma problemów</ProblemButton>
              <ProblemButton>Cierpi na</ProblemButton>
            </ProblemContainer>

            <GridContainer>
              <div className="STEP__five-grid-1">
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Zapalenie trzustki</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Cukrzyca</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Skóra i sierść</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Wątroba</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Stawy</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Nowotwory</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Wrażliwy żółądek</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Serce</label>
                </div>
              </div>
              <div className="STEP__five-grid-1">
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Padaczka</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Nieswoiste zapalenie jelit</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Nerki</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Kamienie nerkowe</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Nietolerancja pokarmowa</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Rekonwalescencja</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Zabuzenie wchłaniania</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  <label for="dewey">Niperlipidemia</label>
                </div>
              </div>
            </GridContainer>
          </FiveContainer>
          <div className="STEP__first-container STEP_conteiner-four">
            <Link to="/krok-5" className="STEP__link-button">
              <NextButton />
            </Link>
          </div>
        </Container>
      </MainContainer>
    </div>
  );
};

export default StepFive;
