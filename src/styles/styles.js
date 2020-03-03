import styled from "styled-components";
import colors from "../styles/colors/colors";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    width: 100vw;
    height: 100%;
    background: ${colors.black};
`;

export const Header = styled.h1`
    color: ${colors.blue};
    font-size: 3em;
    font-family: "Montserrat";
`;

export const SubHeader = styled.p`
    color: ${colors.lightGray};
    padding: 40px 0px;
    font-family: "Open Sans Condensed";
    font-size: 0.8em;
    letter-spacing: 3px;
    width: 400px;
`;

export const Form = styled.form`
    width: 500px;
`;

export const Input = styled.input`
    border: 0;
    background: ${colors.lightBlack};
    color: ${colors.blue};
    padding: 10px;
    margin: 20px 20px 20px 0;
    width: 100%;
`;

export const TextArea = styled.textarea`
    border: 0;
    background: ${colors.lightBlack};
    color: ${colors.blue};
    height: 200px;
    padding: 10px;
    margin: 20px 20px 20px 0;
    resize: none;
    width: 100%;
`;

export const Button = styled.button`
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
