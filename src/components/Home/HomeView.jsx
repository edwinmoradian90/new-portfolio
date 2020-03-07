import React from "react";
import styled from "styled-components";
import { Container, Header, Logo } from "../../styles/styles";
import colors from "../../styles/colors/colors";
import Typical from "react-typical";

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
  transition: 1s;
  width: 270px;
  &:hover {
    background: ${colors.blue};
    color: ${colors.lightBlack};
  }
`;

const HomeView = props => {
  return (
    <Container>
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
  );
};

export default HomeView;
