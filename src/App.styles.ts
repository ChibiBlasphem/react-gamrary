import styled, { createGlobalStyle } from 'styled-components';
import { gVar, generateVars } from 'themthem/global';

const globalVariables = generateVars({
  colors: {
    black: '#000',
    white: '#fff',
    gainsboro: '#dfe3e6',
    'rich-black': '#0b161f',
    gunmetal: '#172530',
  },
});

const lightColors = generateVars({
  tokens: {
    'background-base': gVar('colors.gainsboro'),
    'background-top': gVar('colors.white'),
    'background-inverse': gVar('colors.rich-black'),
    'color-main': gVar('colors.black'),
    'color-inverse': gVar('colors.white'),
  },
});

const darkColors = generateVars({
  tokens: {
    'background-base': gVar('colors.rich-black'),
    'background-top': gVar('colors.gunmetal'),
    'background-inverse': gVar('colors.white'),
    'color-main': gVar('colors.white'),
    'color-inverse': gVar('colors.black'),
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
    color: ${gVar('tokens.color-main')};
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
  background-color: ${gVar('tokens.background-base')};
`;
