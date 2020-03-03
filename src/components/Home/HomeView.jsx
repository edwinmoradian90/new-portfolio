import React from "react";
import styled from "styled-components";
import { Container, Header } from "../../styles/styles";
import colors from "../../styles/colors/colors";
import { MdComputer, MdMusicNote } from "react-icons/md";
import { DiAtom } from "react-icons/di";
import { GiCoffeeCup } from "react-icons/gi";
import Typical from "react-typical";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
    width: 300px;
`;

const SubHeader = styled.p`
    color: ${colors.lightGray};
    font-size: 1em;
    margin-bottom: 30px;
`;

const Contact = styled.p`
    border: 2px solid ${colors.blue};
    border-radius: 3px;
    color: ${colors.blue};
    cursor: pointer;
    font-size: 0.7em;
    padding: 10px 30px;
    text-align: center;
    transition: 1s;
    width: 250px;
    &:hover {
        background: ${colors.blue};
        color: ${colors.lightBlack};
    }
`;

const Logo = styled.h1`
    padding-right: 40px;
    font-size: 2em;
    transition: 1s;
    &:hover {
        color: ${colors.blue};
        transform: rotate(20deg);
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
                    <SubHeader className="d-flex">
                        <Logo>
                            <MdComputer />
                        </Logo>{" "}
                        <Logo>
                            <DiAtom />
                        </Logo>{" "}
                        <Logo>
                            <MdMusicNote />
                        </Logo>
                        <Logo>
                            <GiCoffeeCup />
                        </Logo>
                    </SubHeader>
                    <Contact>CONTACT ME</Contact>
                </CardContainer>
            </div>
        </Container>
    );
};

export default HomeView;
