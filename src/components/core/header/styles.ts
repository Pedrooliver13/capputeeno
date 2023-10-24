// Packages
import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) =>
    css`
      background-color: ${theme.colors.white};

      svg {
        color: ${theme.colors.gray};
      }

      .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 1rem;
        padding-bottom: 1rem;
        flex-wrap: wrap;
        gap: 2.4rem;

        &__logo {
          flex: 1;
          font-family: ${theme.fonts.logoFont};
          font-size: ${theme.textSizes['logo-l']};
          color: ${theme.colors['base-logo']};
          font-weight: 400;
        }

        &__search {
          max-width: 350px;
          width: 100%;

          @media (max-width: ${theme.breakpoints.MD}) {
            order: 3;
            min-width: 100%;
          }
        }

        &__cart {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.8rem;
          border: none;
          border-radius: 6px;

          @media (max-width: ${theme.breakpoints.MD}) {
            order: 2;
          }

          &--count {
            position: absolute;
            bottom: 0px;
            right: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.7rem;
            height: 1.7rem;
            border-radius: 50%;
            font-weight: 500;
            background-color: ${({ theme }): string => theme.colors.red};
            color: ${({ theme }): string => theme.colors.white};
            font-size: ${({ theme }): string => theme.textSizes['text-xs']};
          }
        }
      }
    `}
`;
