// Packages
import { ReactElement } from 'react';
import Image from 'next/image';

// Utils
import { formatCurrency } from 'utils/formatCurrency';

// Services
import { Product } from 'services/products';

// Styles
import * as Styled from './styles';

type CardProps = Product;

export const Card = (props: CardProps): ReactElement => {
  return (
    <Styled.CardContainer href={`/show/${props?.id}`}>
      <div className="image">
        <Image
          src={props?.image_url}
          alt={props?.category}
          width={256}
          height={300}
          priority
        />
      </div>
      <div className="info">
        <div className="info__title">{props?.name}</div>
        <div className="info__price">
          {formatCurrency(props?.price_in_cents)}
        </div>
      </div>
    </Styled.CardContainer>
  );
};
