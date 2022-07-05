import styled, { createGlobalStyle } from 'styled-components';
import { cssVariable, generateGlobalCSSVariables } from 'themthem';

const globalVariables = generateGlobalCSSVariables({
  colors: {
    black: '#000',
    white: '#fff',
    gainsboro: '#dfe3e6',
    'rich-black': '#0b161f',
    gunmetal: '#172530',
  },
});

const lightColors = generateGlobalCSSVariables({
  tokens: {
    'background-base': cssVariable('global', 'colors', 'gainsboro'),
    'background-top': cssVariable('global', 'colors', 'white'),
    'background-inverse': cssVariable('global', 'colors', 'rich-black'),
    'color-main': cssVariable('global', 'colors', 'black'),
    'color-inverse': cssVariable('global', 'colors', 'white'),
  },
});

const darkColors = generateGlobalCSSVariables({
  tokens: {
    'background-base': cssVariable('global', 'colors', 'rich-black'),
    'background-top': cssVariable('global', 'colors', 'gunmetal'),
    'background-inverse': cssVariable('global', 'colors', 'white'),
    'color-main': cssVariable('global', 'colors', 'white'),
    'color-inverse': cssVariable('global', 'colors', 'black'),
  },
});

export const AppGlobalStyle = createGlobalStyle`
  :root {
    ${globalVariables}
    ${darkColors}
  }

  @media(prefers-color-scheme: light) {
    :root {
      ${lightColors}
    }
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: Montserrat, sans-serif;
    color: ${cssVariable('global', 'tokens', 'color-main')};
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
  background-color: ${cssVariable('global', 'tokens', 'background-base')};
`;
