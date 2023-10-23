// Packages
import Link from 'next/link';
import { ReactElement } from 'react';
import { ShoppingBagOpen as ShoppingBagOpenIcon } from 'phosphor-react';

// Components
import { Input } from 'components/core';

// Styles
import * as Styled from './styles';

export const Header = (): ReactElement => {
  return (
    <Styled.HeaderContainer>
      <div className="content container">
        <div className="content__logo">
          <Link href="/">capputeeno</Link>
        </div>

        <div className="content__search">
          <Input />
        </div>

        <div className="content__cart">
          <span className="content__cart--count">3</span>
          <ShoppingBagOpenIcon size={28} />
        </div>
      </div>
    </Styled.HeaderContainer>
  );
};
