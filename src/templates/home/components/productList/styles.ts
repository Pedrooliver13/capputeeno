// Packages
import styled, { css } from 'styled-components';

export const ProductsList = styled.section`
  ${({ theme }) => css`
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    margin-top: 1.8rem;

    @media (max-width: ${theme.breakpoints.XL}) {
      justify-content: center;
    }

    .skeleton-list {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .message {
      margin: 0 auto;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.gray};
      font-size: ${theme.textSizes['text-m']};
      height: 60vh;
    }
  `}
`;
