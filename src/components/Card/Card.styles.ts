import styled from 'styled-components';
import { createCSSVariableGenerator, cssVariable } from 'themthem';

export interface GamesCardProps {
  background: string | undefined;
}

const generateCardCSSVariables = createCSSVariableGenerator('Card');

const cardVariables = generateCardCSSVariables({
  'background-color': cssVariable('global', 'tokens', 'background-top'),
});

export const CardRoot = styled.div.attrs<GamesCardProps>((props) => {
  return {
    style: {
      backgroundImage: `url(${props.background})`,
    },
  };
})<GamesCardProps>`
  ${cardVariables}

  position: relative;
  background-size: cover;
  border-radius: 4px;
  background-color: ${cssVariable('component', 'Card', 'background-color')};
  background-position: center;
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
    background-color: rgba(0, 0, 0, 0.4);
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
