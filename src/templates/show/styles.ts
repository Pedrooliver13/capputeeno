// Packages
import styled, { css } from 'styled-components';

export const ShowContainer = styled.div`
  ${({ theme }) => css`
    .back-button button {
      border: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 2.6rem;
      color: ${theme.colors.gray};
      font-weight: 400;
      cursor: pointer;
    }
  `}
`;

export const ProductContent = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 3.2rem;

    @media (max-width: ${theme.breakpoints.MD}) {
      max-width: 600px;
      width: 100%;
      align-content: center;

      margin-left: auto;
      margin-right: auto;
      justify-content: center;
    }

    img {
      max-width: 64.8rem;
      width: 'auto';
      border-radius: 4px;
      object-fit: cover;

      @media (max-width: ${theme.breakpoints.XL}) {
        max-width: 50rem;
      }

      @media (max-width: ${theme.breakpoints.LG}) {
        display: block;
        max-width: 100%;
        height: 250px;
      }
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      color: ${theme.colors['base-text-dark']};

      @media (max-width: ${theme.breakpoints.MD}) {
        max-width: 100%;
        width: 100%;
        margin: 1.2rem auto;
      }

      &__category {
        font-size: ${theme.textSizes['text-m']};
        font-weight: 400;
      }

      &__title {
        font-size: ${theme.textSizes['title-l']};
        font-weight: 300;

        @media (max-width: ${theme.breakpoints.MD}) {
          font-size: ${theme.textSizes['title-s']};
        }
      }

      &__price {
        font-family: ${theme.fonts.default};
        font-size: ${theme.textSizes['text-l']};
        color: ${theme.colors['base-text']};
        font-weight: 600;

        @media (max-width: ${theme.breakpoints.MD}) {
          font-size: ${theme.textSizes['title-xs']};
        }
      }

      &__observation {
        margin-top: 2.4rem;
        font-weight: 400;
        font-size: ${theme.textSizes['text-bold-xs']};
      }

      &__description {
        font-size: ${theme.textSizes['text-s']};
        font-weight: 400;
        line-height: 21px;
        margin-top: 5.8rem;

        &--title {
          color: ${theme.colors.gray};
          text-transform: uppercase;
          font-weight: 500;
          font-size: ${theme.textSizes['text-m']};
        }

        @media (max-width: ${theme.breakpoints.MD}) {
          margin-top: 1.8rem;
        }
      }

      &__add-cart {
        flex-grow: 1;
        display: flex;
        align-items: flex-end;

        @media (max-width: ${theme.breakpoints.MD}) {
          margin-top: 6rem;
        }
      }
    }
  `}
`;
