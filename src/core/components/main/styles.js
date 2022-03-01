import styled from "styled-components";

export const Context = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 88vh;

    @media screen and (max-width: 400px){
        height: 94vh;
    }
`;

export const Container = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 1vw;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.background};
    box-shadow: ${props => props.shadow};
    text-align: center;

    h3 {
        color: ${(props) => props.theme.id};
    }

    @media screen and (max-width: 400px){
        width: 80vw;
    }
`;

export const Button = styled.button`
    height: 4vh;
    width: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${(props) => props.theme.button};
    cursor: pointer;
    border: none;
    outline: none;
    font-size: 1.5vw;
    color: ${(props) => props.theme.color};

    :hover {
        background: ${(props) => props.theme.hover};
        transition: 0.2s;
        box-shadow: 0 0 1em black;
    }

    @media screen and (max-width: 400px){
        width: 10vw;
        height: 5vh;
        font-size: 6vw;
    }

`;