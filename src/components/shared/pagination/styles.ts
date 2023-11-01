// Packages
import styled, { css } from 'styled-components';

export const PaginationContainer = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    margin-top: 2.4rem;
    margin-bottom: 1.8rem;
    flex: 1;
    transition: all 1s ease-in-out;

    .disabled {
      opacity: 0.2;
      cursor: none;
      pointer-events: none;
    }

    ul {
      display: flex;
      gap: 2px;

      li,
      a {
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
