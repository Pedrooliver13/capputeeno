'use client';

// Packages
import Image from 'next/image';
import { ReactElement } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { ShoppingBagOpen as ShoppingBagOpenIcon } from 'phosphor-react';

// Components
import { Button, BackButton } from 'components/core';
import { DefaultLayout } from 'components/layout';

// Services
import { Product } from 'services/products';

// Utils
import { formatCurrency } from 'utils/formatCurrency';

// Contexts
import { useCartContext } from 'contexts/useCartContext';

// Styles
import * as Styled from './styles';

interface ShowTemplateProps {
  product: Product;
}

export const ShowTemplate = (props: ShowTemplateProps): ReactElement => {
  const router = useRouter();
  const { product } = props;
  const { addProductInCart, listCart } = useCartContext();

  const handleClick = () => {
    const payload = {
      ...product,
      quantity: 1,
    };

    const alreadySelected = listCart.find(
      (productCart) => product.id === productCart?.id
    );

    if (alreadySelected) {
      toast('Este produto já foi selecionado!', {
        type: 'warning',
        theme: 'dark',
      });
      return;
    }

    addProductInCart(payload);

    localStorage.setItem(
      '@capputeeno:cart-state-1.0.0',
      JSON.stringify([...listCart, payload])
    );

    toast('Produto adicionado ao carrinho!', { type: 'info', theme: 'dark' });
    router.push('/cart');
  };

  return (
    <DefaultLayout>
      <Styled.ShowContainer className="container">
        <BackButton />

        <Styled.ProductContent>
          <Image
            src={product?.image_url || ''}
            alt={product?.category || ''}
            width={640}
            height={580}
            priority
          />

          <div className="content">
            <span className="content__category">{product?.category}</span>
            <h1 className="content__title">{product?.name}</h1>
            <div className="content__price">
              {formatCurrency(product?.price_in_cents)}
            </div>
            <span className="content__observation">
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </span>
            <div className="content__description">
              <div className="content__description--title">Descrição</div>

              <p>{product?.description}</p>
            </div>
            <div className="content__add-cart">
              <Button
                startIcon={<ShoppingBagOpenIcon />}
                variant="secondary"
                onClick={handleClick}
              >
                ADICIONAR AO CARRINHO
              </Button>
            </div>
          </div>
        </Styled.ProductContent>
      </Styled.ShowContainer>
    </DefaultLayout>
  );
};
