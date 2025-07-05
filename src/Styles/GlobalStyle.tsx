import {createGlobalStyle} from 'styled-components';
import {theme} from "./Theme.styles.ts";

export const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.textColor};
        line-height: 1.2;
    }

    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    section {
        padding: 140px 0;

        @media ${theme.media.tablet} {
            padding: 80px 0;
        }

        @media ${theme.media.mobile} {
            padding: 80px 0;
        }
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }
`;