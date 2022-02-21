import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    width: 20vw;
`;

export const Title = styled.div`
    font-size: 2vw;
    cursor: pointer;
    font-weight: 700;
    color: ${(props) => props.theme.color};

    :hover {
        color: ${(props) => props.theme.txt};
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
`;