import { createGlobalStyle } from "styled-components"; 
import SpaceMonoBold from '../assets/fonts/SpaceMono-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Space Mono';
        src: ${`url(${SpaceMonoBold}) format('truetype')`};
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        transition: 0.1s;
    }

    body {
        display: flex;
        justify-content: center;
        font-family: 'Space Mono';
        background: ${(props) => props.theme.background};
    }
`;