// Packages
import styled, { css } from 'styled-components';

export const FilterContainer = styled.div`
  ${({ theme }) => css`
    position: relative;

    button {
      border: none;
      background: transparent;
      cursor: pointer;

      font-weight: 400;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }

    .backdrop {
      display: block;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      background-color: red;
    }

    .dropdown {
      position: absolute;

      background-color: ${theme.colors.white};
      border-radius: 4px;
      font-weight: 400;
      width: 20rem;
      z-index: 999;
      top: 28px;
      right: 5px;
      padding: 1rem;

      li {
        cursor: pointer;
        width: 100%;
        font-size: ${theme.textSizes['text-s']};
        padding: 0.8rem 1rem;
      }
    }
  `}
`;
