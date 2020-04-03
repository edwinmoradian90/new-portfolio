import React from "react";
import styled, { keyframes } from "styled-components";
import ReactLoading from "react-loading";
import { Container, Header, Logo, PageContainer } from "../../styles/styles";
import colors from "../../styles/colors/colors";
import Typical from "react-typical";
import Wave from "react-wavify";

const slideDown = keyframes`
  from {
   transform: translateY(-40px);
  }

  to {
    transform: translateY(0px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const CardContainer = styled.div`
  animation: ${slideDown} linear 1s;
  animation-iteration-count: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  padding: 130px 80px;
  margin: auto;
  width: auto;
  min-width: 450px;

  @media (max-width: 767px) {
    margin: auto;
    justify-content: center;
    height: calc(100vh - 80px);
    width: 100vw;
  }
`;

const SubHeader = styled.div`
  animation: ${fadeIn} 1s forwards 1;
  animation-delay: 2s;
  opacity: ${props => (props.loaded ? 1 : 0)};
  color: ${colors.lightGray};
  font-size: 1em;
  margin-bottom: 30px;
`;

const Contact = styled.a`
  animation: ${fadeIn} 1s forwards;
  animation-delay: 2s;
  background: ${colors.blue};
  border-radius: 3px;
  color: ${props => (props.darkMode ? colors.lightBlack : colors.white)};
  cursor: pointer;
  font-size: 0.6em;
  padding: 10px 30px;
  opacity: 0;
  text-align: center;
  transition: 0.5s;
  width: 250px;
  &:hover {
    background: ${colors.purple};
    color: ${props => (props.darkMode ? colors.lightBlack : colors.white)};
  }
`;

const StyledWave = styled(Wave)`
  animation: ${fadeIn} linear 1s forwards;
  animation-delay: 3s;
  opacity: 0;
`;

const HomeView = props => {
  if (props.loading) {
    return (
      <Container className="align-items-center">
        <ReactLoading type={"bars"} color={colors.blue} width={"5em"} />
      </Container>
    );
  }
  return (
    <PageContainer darkMode={props.darkMode}>
      <Container darkMode={props.darkMode}>
        <div className="d-flex justify-content-center">
          <CardContainer>
            <Header>
              Hi. I'm Ed, <br />
              <Typical
                steps={[
                  "",
                  2000,
                  "Developer.",
                  5000,
                  "Physicist.",
                  5000,
                  "Musician.",
                  5000,
                  "Coffee.",
                  5000
                ]}
                loop={Infinity}
              />
            </Header>
            <SubHeader className="d-flex justify-content-between">
              {props.logos.map((logo, i) => {
                return (
                  <Logo counter={i} key={i}>
                    {logo}
                  </Logo>
                );
              })}
            </SubHeader>
            <Contact
              darkMode={props.darkMode}
              className="text-decoration-none"
              href="mailto:edwin.moradian90@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTACT ME
            </Contact>
          </CardContainer>
        </div>
      </Container>
      <StyledWave
        className="d-md-block d-none"
        fill={colors.blue}
        paused={false}
        options={{
          height: 70,
          amplitude: 50,
          speed: 0.15,
          points: 2
        }}
      />
    </PageContainer>
  );
};

export default HomeView;
