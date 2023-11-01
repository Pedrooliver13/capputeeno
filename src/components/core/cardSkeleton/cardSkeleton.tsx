// Packages
import ContentLoader from 'react-content-loader';
import { ReactElement } from 'react';

// Styles
import * as Styled from './styles';

export function CardSkeleton(): ReactElement {
  return (
    <Styled.CardSkeletonContainer>
      <ContentLoader
        uniqueKey="card"
        speed={2}
        width={256}
        height={378}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="skeleton"
      >
        <rect
          x="0"
          y="0"
          rx="2"
          ry="2"
          width="256"
          height="300"
          className="skeleton"
        />
        <rect x="15" y="320" rx="3" ry="3" width="135" height="15" />
        <rect x="15" y="350" rx="3" ry="3" width="70" height="15" />
      </ContentLoader>
    </Styled.CardSkeletonContainer>
  );
}
