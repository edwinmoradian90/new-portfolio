import React from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { Container, Header, Logo, PageContainer } from "../../styles/styles";
import colors from "../../styles/colors/colors";
import Typical from "react-typical";
import Wave from "react-wavify";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  width: 300px;

  @media (max-width: 767px) {
    margin: auto;
    justify-content: center;
    height: calc(100vh - 80px);
    width: 100vw;
  }
`;

const SubHeader = styled.div`
  color: ${colors.lightGray};
  font-size: 1em;
  margin-bottom: 30px;
`;

const Contact = styled.a`
  border: 2px solid ${colors.blue};
  border-radius: 3px;
  color: ${colors.blue};
  cursor: pointer;
  font-size: 0.7em;
  padding: 10px 30px;
  text-align: center;
  transition: 0.5s;
  width: 270px;
  &:hover {
    background: ${colors.blue};
    color: ${props => (props.darkMode ? colors.lightBlack : colors.white)};
  }
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
              Hello. <br /> I'm Ed, <br />
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
                return <Logo key={i}>{logo}</Logo>;
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
      <Wave
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
