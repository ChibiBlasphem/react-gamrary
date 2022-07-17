import styled, { css } from 'styled-components';
import { createCSSVariablesGenerator, cssVariable } from 'themthem';

const generatePaginationCSSVariables = createCSSVariablesGenerator('Pagination');

const paginationVariables = generatePaginationCSSVariables({
  'background-active': cssVariable('global', 'tokens', 'background-inverse'),
  'background-hover': cssVariable('global', 'tokens', 'background-top'),
  'color-active': cssVariable('global', 'tokens', 'color-inverse'),
  color: cssVariable('global', 'tokens', 'color-main'),
});

export const PaginationRoot = styled.nav`
  ${paginationVariables}

  display: block;
  padding-top: 5px;
  text-align: center;
`;

export interface PaginationLinkProps {
  selected?: boolean;
}

export const PaginationLink = styled.div<PaginationLinkProps>`
  display: inline-block;
  a {
    display: inline-block;
    padding: 8px 16px;
    cursor: pointer;
    ${(props) =>
      props.selected
        ? css`
            background-color: ${cssVariable('component', 'Pagination', 'background-active')};
            color: ${cssVariable('component', 'Pagination', 'color-active')};
            transition: background-color 0.3s ease;
          `
        : css`
            &:hover {
              background-color: ${cssVariable('component', 'Pagination', 'background-hover')};
            }
          `}
  }
`;
