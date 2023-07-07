import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    body, button, input  {
        font-family: 'Roboto', sans-serif;
        ${(props) => `background-color: ${props.theme.background}`};
        font-weight: 400;
    }

    h1 {
        font-family: 'Baloo 2', cursive;
    }
`
