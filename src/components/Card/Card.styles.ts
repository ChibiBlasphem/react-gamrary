import styled, { keyframes } from 'styled-components';
import { createCSSVariableGenerator, cssVariable } from 'themthem';

export interface GamesCardBackgroundProps {
  background: string | undefined;
}

const generateCardCSSVariables = createCSSVariableGenerator('Card');

const cardVariables = generateCardCSSVariables({
  'background-color': cssVariable('global', 'colors', 'rich-black'),
});

const backgroundAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const CardBackground = styled.div.attrs<GamesCardBackgroundProps>((props) => {
  return {
    style: {
      backgroundImage: `url(${props.background})`,
    },
  };
})<GamesCardBackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  animation: ${backgroundAnimation} 1s;
  filter: brightness(0.6);
`;

export const CardRoot = styled.div`
  ${cardVariables}

  position: relative;
  border-radius: 4px;
  background-color: ${cssVariable('component', 'Card', 'background-color')};
  overflow: hidden;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    padding: 0 12px;
    font-size: 1.2rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
`;
