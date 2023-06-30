import styled from 'styled-components';
import { createGenerator, cVar } from 'themthem/component';
import { gVar } from 'themthem/global';
import { Box } from '../../styled/Box';

const generateHeaderCSSVariables = createGenerator('Header');

export const headerVariables = generateHeaderCSSVariables({
  'background-color': gVar('tokens.background-top'),
});

export const HeaderRoot = styled.header`
  ${headerVariables}
  background-color: ${cVar('Header.background-color')};
`;

export const HeaderNav = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  align-items: stretch;
  height: 100%;

  .logo {
    height: 100%;
    display: flex;
    align-items: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    height: 100%;
    color: inherit;
    text-transform: uppercase;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
`;
