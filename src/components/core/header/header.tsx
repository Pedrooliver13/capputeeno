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
        <Link href="/" className="content__logo">
          capputeeno
        </Link>

        <Styled.HeaderDashboard>
          <div className="search">
            <Input />
          </div>

          <div className="cart">
            <span className="cart__count">3</span>
            <ShoppingBagOpenIcon size={28} />
          </div>
        </Styled.HeaderDashboard>
      </div>
    </Styled.HeaderContainer>
  );
};
