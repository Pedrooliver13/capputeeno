// Packages
import styled, { css } from 'styled-components';

export const PaginationContainer = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    margin-top: 2.4rem;
    margin-bottom: 1.8rem;

    ul {
      display: flex;
      gap: 2px;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        width: 3.2rem;
        height: 3.2rem;
        font-size: 1.6rem;
        border-radius: 8px;

        border: 1px solid transparent;
        background-color: ${theme.colors['light-gray']};
        color: ${theme.colors['gray']};
        font-weight: 400;

        &.active {
          background-color: ${theme.colors.background};
          color: ${theme.colors.orange};
          font-weight: 600;
          border: 1px solid ${theme.colors.orange};
        }
      }
    }
  `}
`;
