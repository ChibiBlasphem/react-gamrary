import styled, { css } from 'styled-components';
import { createGenerator, cVar } from 'themthem/component';
import { gVar } from 'themthem/global';

const generatePaginationCSSVariables = createGenerator('Pagination');

const paginationVariables = generatePaginationCSSVariables({
  'background-active': gVar('tokens.background-inverse'),
  'background-hover': gVar('tokens.background-top'),
  'color-active': gVar('tokens.color-inverse'),
  color: gVar('tokens.color-main'),
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
            background-color: ${cVar('Pagination.background-active')};
            color: ${cVar('Pagination.color-active')};
            transition: background-color 0.3s ease;
          `
        : css`
            &:hover {
              background-color: ${cVar('Pagination.background-hover')};
            }
          `}
  }
`;
