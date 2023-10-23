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
        height: 80px;

        &__logo {
          font-family: ${theme.fonts.logoFont};
          font-size: ${theme.textSizes['logo-l']};
          color: ${theme.colors['base-logo']};
        }
      }
    `}
`;

export const HeaderDashboard = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  .cart {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    border: none;
    border-radius: 6px;

    &__count {
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
`;
