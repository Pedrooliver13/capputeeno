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

    @media (max-width: ${theme.breakpoints.XL}) {
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
    }

    @media (max-width: ${theme.breakpoints.MD}) {
      flex-wrap: wrap;
      margin-left: auto;
      margin-right: auto;
      max-width: 50rem;
    }

    img {
      max-width: 25.6rem;
      width: 100%;
      object-fit: cover;

      @media (max-width: ${theme.breakpoints.MD}) {
        max-width: 100%;
        width: 100%;
      }
    }

    .content {
      display: flex;
      max-width: 48rem;
      width: 100%;
      flex-direction: column;
      padding: 3.1rem;
      font-weight: 400;
      gap: 10px;

      @media (max-width: ${theme.breakpoints.XL}) {
        max-width: 100%;
        width: 100%;
      }

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
        overflow-x: auto;

        max-height: 55px;
      }

      &__footer {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        select {
          width: 65px;
          height: 40px;
          border-radius: 8px;
          padding: 1rem;
          cursor: pointer;

          color: ${theme.colors['base-text']};
        }

        &--price {
          font-weight: 600;
        }
      }
    }
  `}
`;
