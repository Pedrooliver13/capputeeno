// Packages
import styled, { css } from 'styled-components';

export const CardSkeletonContainer = styled.div`
  ${({ theme }) => css`
    width: 25.6rem;
    height: 37.8rem;
    background-color: ${theme.colors.white};
    border-radius: 0.8rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    @media (max-width: ${theme.breakpoints.MD}) {
      max-width: 100%;
      width: 100%;

      .skeleton {
        width: 100%;
      }
    }
  `}
`;
