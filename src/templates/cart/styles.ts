// Packages
import styled, { css } from 'styled-components';

export const CartContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: ${theme.breakpoints.XL}) {
      gap: 20px;
    }

    .back-button a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 2.6rem;
      color: ${theme.colors.gray};
      font-weight: 400;
    }

    .products {
      @media (max-width: ${theme.breakpoints.XL}) {
        max-width: 100%;
        width: 100%;
        gap: 20px;
      }

      &__header {
        margin-top: 2.3rem;
        margin-bottom: 2.3rem;

        &--title {
          font-size: ${theme.textSizes['title-m']};
          font-weight: 500;

          @media (max-width: ${theme.breakpoints.XL}) {
            font-size: ${theme.textSizes['title-s']};
          }
        }

        &--info {
          font-size: ${theme.textSizes['text-m']};
          color: ${theme.colors.gray};

          span {
            color: ${theme.colors['base-text-dark']};
            font-weight: 600;
          }
        }
      }

      &__list {
        display: flex;
        flex-direction: column;
        overflow-x: auto;
        max-height: 650px;

        @media (max-width: ${theme.breakpoints.XL}) {
          align-items: center;
          overflow-y: hidden;
          max-height: 100%;
        }
      }
    }

    .resume {
      display: flex;
      flex-direction: column;

      min-height: 700px;
      max-width: 35.2rem;
      width: 100%;
      padding: 2.4rem;
      margin-top: 4rem;
      margin-bottom: 4rem;
      background-color: ${theme.colors.white};
      border-radius: 8px;
      gap: 30px;

      @media (max-width: ${theme.breakpoints.XL}) {
        max-width: 100%;
        min-height: 450px;
      }

      &__header {
        font-size: ${theme.textSizes['title-s']};
        color: ${theme.colors['base-text-dark']};
        font-weight: 600;
        text-transform: uppercase;
      }

      &__price {
        flex: 1;
        font-size: ${theme.textSizes['text-m']};
        display: flex;
        flex-direction: column;
        gap: 40px;

        ul {
          display: flex;
          flex-direction: column;
          gap: 12px;

          li {
            display: flex;
            justify-content: space-between;
          }

          li:last-child {
            font-weight: 600;
            border-top: 1px solid ${theme.colors['light-gray']};
            padding: 0.8rem 0;
          }

          span {
            font-weight: 600;
          }
        }
      }

      &__footer li {
        cursor: pointer;
        text-decoration-line: underline;
      }
    }
  `}
`;

export const CartProductList = styled.section``;
