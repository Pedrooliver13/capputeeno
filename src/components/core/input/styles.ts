// Packages
import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;

    button {
      position: absolute;
      display: flex;
      top: 10px;
      right: 10px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: ${theme.colors.gray};
    }

    input {
      display: flex;
      align-items: center;
      max-width: 100%;
      min-height: 4.2rem;
      width: 100%;
      padding: 0.9rem 1.6rem;
      padding-right: 4rem;
      gap: 4px;
      border: 1px solid transparent;
      border-radius: 8px;
      background-color: ${theme.colors['base-input']};
      color: ${theme.colors['base-text']};
      font-weight: 400;

      &::placeholder {
        font-size: 1.6rem;
        font-weight: 400;
      }
    }
  `}
`;
