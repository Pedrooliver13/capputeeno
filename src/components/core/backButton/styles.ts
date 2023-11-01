// Packages
import styled, { css } from 'styled-components';

export const BackButtonContainer = styled.div`
  ${({ theme }) => css`
    button {
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
