// Packages
import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;

    svg {
      position: absolute;
      display: flex;
      top: 10px;
      right: 10px;
      color: ${theme.colors.gray};
    }

    input {
      display: flex;
      padding: 0.9rem 1.6rem;
      padding-right: 4rem;
      align-items: center;
      gap: 4px;
      width: 352px;
      min-height: 4.2rem;
      border: 1px solid transparent;
      background-color: ${theme.colors['base-input']};
      border-radius: 8px;
      color: ${theme.colors['base-text']};

      &::placeholder {
        font-size: 1.6rem;
        font-weight: 400;
        text-transform: capitalize;
      }

      &:active {
      }
    }
  `}
`;
