// Packages
import Link from 'next/link';
import { ReactElement } from 'react';
import { ShoppingBagOpen as ShoppingBagOpenIcon } from 'phosphor-react';

// Components
import { SearchInput } from 'components/shared';

// Contexts
import { useProductContext } from 'contexts/useProductContext';
import { useCartContext } from 'contexts/useCartContext';

// Styles
import * as Styled from './styles';

// Hooks
import { useCart } from 'hooks/useCart';

export const Header = (): ReactElement => {
  const { totalProductsInCart } = useCart();
  const { resetAll } = useProductContext();

  return (
    <Styled.HeaderContainer>
      <div className="content container">
        <div className="content__logo">
          <Link href="/" onClick={resetAll}>
            capputeeno
          </Link>
        </div>

        <div className="content__search">
          <SearchInput />
        </div>

        <Link href="/cart" className="content__cart">
          {totalProductsInCart > 0 && (
            <span className="content__cart--count">{totalProductsInCart}</span>
          )}
          <ShoppingBagOpenIcon size={28} />
        </Link>
      </div>
    </Styled.HeaderContainer>
  );
};
