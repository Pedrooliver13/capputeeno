// Packages
import { ReactElement } from 'react';
import Link from 'next/link';
import { ArrowCircleLeft as ArrowCircleLeftIcon } from 'phosphor-react';

// Components
import { Button, CartCard } from 'components/core';
import { DefaultLayout } from 'components/layout';

// Styles
import * as Styled from './styles';

export const CartTemplate = (): ReactElement => {
  return (
    <DefaultLayout>
      <Styled.CartContainer className="container">
        <section className="products">
          <div className="back-button">
            <Link href="/">
              <ArrowCircleLeftIcon size={24} /> Voltar
            </Link>
          </div>

          <div className="products__header">
            <div className="products__header--title">SEU CARRINHO</div>
            <p className="products__header--info">
              Total (3 produtos) <span>R$ 161,00</span>
            </p>
          </div>

          <div className="products__list">
            <CartCard />
            <CartCard />
          </div>
        </section>

        <section className="resume">
          <h1 className="resume__header">RESUMO DO PEDIDO</h1>
          <div className="resume__price">
            <ul>
              <li>
                Subtotal de produtos <span>R$ 161,00</span>
              </li>
              <li>
                Entrega <span>R$ 40,00</span>
              </li>
              <li>
                Total <span>R$ 201,00</span>
              </li>
            </ul>

            <Button>FINALIZAR A COMPRA</Button>
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
