import styled, { css } from 'styled-components';

export const PaginationRoot = styled.nav`
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
            background-color: #404040;
            color: #fff;
            transition: background-color 0.3s ease;
          `
        : css`
            &:hover {
              background-color: #fff;
            }
          `}
  }
`;
