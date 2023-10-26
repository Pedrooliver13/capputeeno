// Packages
import styled, { css } from 'styled-components';
import Link from 'next/link';

export const CardContainer = styled(Link)`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    max-width: 256px;
    width: 100%;
    background-color: ${theme.colors.white};
    border-radius: 4px;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: ${theme.breakpoints.XL}) {
      max-width: 100%;
    }

    .image {
      border-radius: 8px;

      .isHidden {
        opacity: 0;
        height: 0;
        width: 0;
      }

      .skeleton {
        top: -4px;
      }

      img,
      .skeleton {
        position: relative;
        max-width: 100%;
        object-fit: cover;

        @media (max-width: ${theme.breakpoints.LG}) {
          width: 100%;
        }
      }
    }

    .info {
      font-size: ${theme.textSizes['text-m']};
      font-weight: 300;
      padding: 0.8rem 1.2rem;

      &__title {
        color: ${theme.colors['base-text-dark']};
      }

      &__title::after {
        content: '';
        position: relative;
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${theme.colors.background};
        margin-top: 1rem;
        margin-bottom: 1rem;
      }

      &__price {
        font-weight: 600;
        font-size: ${theme.textSizes['text-s']};
      }
    }
  `}
`;
