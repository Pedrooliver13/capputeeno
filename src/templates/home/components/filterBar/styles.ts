// Packages
import styled, { css } from 'styled-components';

export const CategoryContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.4rem;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: ${theme.breakpoints.MD}) {
      justify-content: flex-end;
    }

    ul.category {
      display: flex;
      align-items: center;
      gap: 20px;

      @media (max-width: ${theme.breakpoints.MD}) {
        display: none;
      }

      li {
        position: relative;
        font-size: ${theme.textSizes['text-m']};
        text-transform: uppercase;
        font-weight: 400;
        cursor: pointer;

        @media (max-width: ${theme.breakpoints.MD}) {
          font-size: 1.2rem;
        }

        &.active {
          font-weight: 600;

          &::after {
            content: '';
            position: absolute;
            display: block;
            width: 100%;
            height: 4px;
            background-color: ${({ theme }) => theme.colors.orange};
          }
        }
      }
    }
  `}
`;
