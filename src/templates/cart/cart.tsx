'use client';

// Packages
import { ReactElement } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

// Components
import { CartCard } from 'components/shared';
import { DefaultLayout } from 'components/layout';
import { Button, BackButton } from 'components/core';

// Contexts
import { useCartContext } from 'contexts/useCartContext';

// Utils
import { formatCurrency } from 'utils/formatCurrency';

// Hooks
import { useCart } from 'hooks/useCart';
import { useLocalStorage } from 'hooks/useLocalStorage';

// Styles
import * as Styled from './styles';

export const CartTemplate = (): ReactElement => {
  const router = useRouter();

  const { updateLocalStorage } = useLocalStorage(
    '@capputeeno:cart-state-1.0.0',
    []
  );

  const { listCart, updateProductInCart } = useCartContext();
  const {
    defaultDeliveryValue,
    totalPriceInCents,
    totalProductsInCart,
    totalPriceWithDeliveryInCents,
  } = useCart();

  const handleClick = () => {
    updateLocalStorage([]);
    updateProductInCart([]);
    router.push('/');

    toast('Compra finalizada com sucesso!', {
      type: 'success',
      theme: 'dark',
    });
  };

  return (
    <DefaultLayout>
      <Styled.CartContainer className="container">
        <section className="products">
          <BackButton />

          <div className="products__header">
            <div className="products__header--title">SEU CARRINHO</div>
            <p className="products__header--info">
              Total ({totalProductsInCart} produtos){' '}
              <span>{formatCurrency(totalPriceInCents)}</span>
            </p>
          </div>

          <div className="products__list">
            {listCart?.map((product) => (
              <CartCard key={product?.id} {...product} />
            ))}
          </div>
        </section>

        <section className="resume">
          <h1 className="resume__header">RESUMO DO PEDIDO</h1>
          <div className="resume__price">
            <ul>
              <li>
                Subtotal de produtos
                <span>{formatCurrency(totalPriceInCents)}</span>
              </li>
              <li>
                Entrega <span>{formatCurrency(defaultDeliveryValue)}</span>
              </li>
              <li>
                Total{' '}
                <span>{formatCurrency(totalPriceWithDeliveryInCents)}</span>
              </li>
            </ul>

            <Button
              type="button"
              onClick={handleClick}
              disabled={listCart.length <= 0}
            >
              FINALIZAR A COMPRA
            </Button>
          </div>

          <div className="resume__footer">
            <ul>
              <li>AJUDA</li>
              <li>REEMBOLSOS</li>
              <li>ENTREGAS E FRETE</li>
              <li>TROCAS E DEVOLUÇÕES</li>
            </ul>
          </div>
        </section>
      </Styled.CartContainer>
    </DefaultLayout>
  );
};
