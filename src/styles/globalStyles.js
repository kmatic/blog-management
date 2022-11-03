import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
    }

    body {
        max-width: 1000px;
        margin: 0 auto;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    button {
        border: none;
        outline: none;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        cursor: pointer;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: 1.2;
    }
    
    html {
        line-height: 1.6;
    }
`;

export default GlobalStyle;