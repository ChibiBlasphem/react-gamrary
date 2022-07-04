import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface GamesCardProps {
  background: string | undefined;
}

export const CardRoot = styled.div.attrs<GamesCardProps>((props) => {
  return {
    style: {
      backgroundImage: `url(${props.background})`,
    },
  };
})<GamesCardProps>`
  position: relative;
  background-size: cover;
  border-radius: 4px;
  background-color: #fff;
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
