import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    width: 100vw;
    height: 12vh;

    @media screen and (max-width: 600px){
        height: 6vh
    }
`;

export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 20vw;

    @media screen and (max-width: 600px){
        width: 40vw;
    }
`;

export const Title = styled.div`
    font-size: 2vw;
    cursor: pointer;
    font-weight: 700;
    color: ${(props) => props.theme.color};

    :hover {
        color: ${(props) => props.theme.txt};
    }

    @media screen and (max-width: 600px){
        font-size: 5vw;
    }
`;

export const ButtonMode = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    outline: none;
    border: none;
    font-size: 1.4vw;
    cursor: pointer;

    svg {
        fill: ${(props) => props.theme.color};

        :hover{
            fill: ${(props) => props.theme.txt};
        }
    }

    @media screen and (max-width: 600px){
        font-size: 3.5vw;
    }
`;