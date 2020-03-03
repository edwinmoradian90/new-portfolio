import React from "react";
import styled from "styled-components";
import { Container, Header } from "../../styles/styles";
import colors from "../../styles/colors/colors";

const HomeContainer = styled.div`
    width: 100vw;
    height: 100%;
    background: ${colors.lightBlack};
`;

const SubHeader = styled.p`
    color: ${colors.lightGray};
    font-size: 14px;
`;

const Contact = styled.p`
    border: 1px solid ${colors.blue};
    color: ${colors.blue};
    cursor: pointer;
    padding: 10px 30px;
    text-align: center;
    width: 200px;
    &:hover {
        background: ${colors.blue};
        color: ${colors.lightBlack};
    }
`;

const HomeView = props => {
    return (
        <Container>
            <div>
                <Header>
                    Hello, <br /> I'm Edwin, <br /> Web developer, <br />{" "}
                    Physicist, <br />
                    Something.
                </Header>
                <SubHeader>Web developer / Physicist / Musician</SubHeader>
                <Contact>CONTACT ME</Contact>
            </div>
            <div></div>
        </Container>
    );
};

export default HomeView;
