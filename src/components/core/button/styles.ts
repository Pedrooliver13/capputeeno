// Packages
import styled, { css } from 'styled-components';

export type ButtonStyleType = 'primary' | 'secondary';

interface ButtonStyleProps {
  variant?: ButtonStyleType;
}

export const variantThemes = {
  primary: 'base-button-primary',
  secondary: 'base-button-secondary',
};

export const ButtonContainer = styled.button<ButtonStyleProps>`
  ${({ theme, variant }) => css`
    max-width: 100%;
    width: 100%;
    gap: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    cursor: pointer;
    text-transform: uppercase;
    font-weight: 500;
    font-size: ${theme.textSizes['text-m']};
    padding: 1rem;

    border: 1px solid transparent;

    background-color: ${variant === 'primary' || !variant
      ? theme.colors['base-button-primary']
      : theme.colors['base-button-secondary']};

    color: ${theme.colors.white};
    transition: all 0.3s ease-in-out;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    &:hover {
      filter: brightness(1.2);
    }
  `}
`;
