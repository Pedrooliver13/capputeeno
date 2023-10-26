'use client';

// Packages
import { ReactElement, useState } from 'react';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';

// Styles
import * as Styled from './styles';

export const Card = (): ReactElement => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  return (
    <Styled.CardContainer href={'/show'}>
      <div className="image">
        {isLoadingImage && <Skeleton height={300} className="skeleton" />}

        <Image
          src="https://images.unsplash.com/photo-1694976532214-0226d426df4c?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={isLoadingImage ? 'isHidden' : ''}
          alt="Caneca"
          width={256}
          height={300}
          loading="lazy"
          onLoadingComplete={() => setIsLoadingImage(false)}
        />
      </div>
      <div className="info">
        <div className="info__title">Caneca de cerâmica rústica</div>
        <div className="info__price">R$ 40,00</div>
      </div>
    </Styled.CardContainer>
  );
};
