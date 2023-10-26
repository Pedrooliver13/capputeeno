// Packages
import styled, { css } from 'styled-components';

export const CartCardComponent = styled.div`
  ${({ theme }) => css`
    display: flex;
    max-width: 73.6rem;
    width: 100%;
    background-color: ${theme.colors.white};
    border-radius: 8px;
    overflow: hidden;
    margin-top: 20px;

    @media (max-width: ${theme.breakpoints.MD}) {
      flex-wrap: wrap;
    }

    img {
      max-width: 25.6rem;
      width: 100%;
      object-fit: cover;

      @media (max-width: ${theme.breakpoints.MD}) {
        max-width: 100%;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      padding: 1.6rem;
      font-weight: 400;
      gap: 12px;

      &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &--title {
          font-size: ${theme.textSizes['text-l']};
          color: ${theme.colors['base-text-dark']};
          font-weight: 300;

          @media (max-width: ${theme.breakpoints.MD}) {
            font-size: ${theme.textSizes['text-m']};
          }
        }

        svg {
          cursor: pointer;
          color: ${theme.colors.red};
        }
      }

      &__description {
        font-size: ${theme.textSizes['text-bold-xs']};
        font-weight: 400;
        line-height: 18px;
        flex: 1;
      }

      &__footer {
        display: flex;
        justify-content: space-between;

        select {
          width: 65px;
          height: 40px;
          border-radius: 8px;
          padding: 1rem;

          color: ${theme.colors['base-text']};
        }

        &--price {
          font-weight: 600;
        }
      }
    }
  `}
`;
