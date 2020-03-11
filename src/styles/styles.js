import styled from "styled-components";
import colors from "../styles/colors/colors";

export const AppContainer = styled.div ``;

export const Container = styled.section `
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100vw - 80px);
    height: 100%;
    background: ${colors.black};

    @media (max-width: 767px) {
        padding: 10px;
        box-sizing: border-box;
        min-height: 100vh;
        width: 100vw;
    }
`;

export const Header = styled.h1 `
    color: ${colors.blue};
    font-size: 3em;
    font-family: "Montserrat";
`;

export const SubHeader = styled.div `
    color: ${colors.lightGray};
    padding: 40px 0px;
    font-family: "Open Sans";
    font-size: 0.8em;
    letter-spacing: 3px;
    line-height: 20px;
    width: 400px;
    max-width: 100vw;

    @media (max-width: 320px) {
        padding: 40px 40px;
    }
`;

export const Form = styled.form `
    width: 500px;
`;

export const Input = styled.input `
    border: 0;
    background: ${colors.lightBlack};
    color: ${colors.lightGray};
    padding: 10px;
    margin: 20px 20px 0px 0px;
    transitions: 0.5s;
    width: 100%;
    &:focus {
        color: ${colors.blue};
    }
`;

export const TextArea = styled.textarea `
    border: 0;
    background: ${colors.lightBlack};
    color: ${colors.lightGray};
    height: 200px;
    padding: 10px;
    margin: 20px 20px 20px 0;
    resize: none;
    width: 100%;
    &:focus {
        color: ${colors.blue};
    }
`;

export const Button = styled.button `
    background: ${colors.black};
    border: 1px solid ${colors.blue};
    border-radius: 3px;
    color: ${colors.blue};
    text-align: center;
    transition: 0.3s;
    padding: 10px 20px;
    &:hover {
        background: ${colors.blue};
        color: ${colors.lightBlack};
    }
`;

export const Logo = styled.div `
    font-size: 2em;
    margin-right: 10px;
    padding: 20px 20px 20px 0;
    transition: .5s;
    &:hover {
        color: ${colors.blue};
        transform: rotate(20deg);
    }
`;

export const LogoContainer = styled.div `
    max-width: 100%;
`;

export const Column = styled.div `
    color: ${colors.lightBlack};
    font-family: "Montserrat";
    font-size: 20px;
    height: auto;
    min-height: 200px;
    max-height: 200px;
    box-sizing: border-box;
    padding: 0;
    width: 100%;
    min-width: 200px;
    margin: 10px 10px;
    transition: .4s;
    text-align: center;
    background: url(${props => props.background});
    background-size: auto;
    background-position: center;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    @media (max-width: 576px) {
        max-width: 100vw;
        width: 100vw;
    }
`;