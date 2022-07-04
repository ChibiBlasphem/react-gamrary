import styled, { createGlobalStyle } from 'styled-components';
import { cssVariable, generateGlobalCSSVariables } from 'themthem';

const globalVariables = generateGlobalCSSVariables({
  colors: {
    black: '#000',
    white: '#fff',
    gainsboro: '#dfe3e6',
  },
});

export const AppGlobalStyle = createGlobalStyle`
  :root {
    ${globalVariables}
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: Montserrat, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3 {
    margin: 0;
  }
`;

export const AppRoot = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'header' 'body' 'footer';
  grid-template-rows: 60px 1fr auto;
  gap: 24px;
  background-color: ${cssVariable('global', 'colors', 'gainsboro')};
`;
