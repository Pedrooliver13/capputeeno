// Packages
import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowCircleLeft as ArrowCircleLeftIcon,
  ShoppingBagOpen as ShoppingBagOpenIcon,
} from 'phosphor-react';

// Components
import { Button } from 'components/core';
import { DefaultLayout } from 'components/layout';

// Styles
import * as Styled from './styles';

export const ShowTemplate = (): ReactElement => {
  return (
    <DefaultLayout>
      <Styled.ShowContainer className="container">
        <div className="back-button">
          <Link href="/">
            <ArrowCircleLeftIcon size={24} /> Voltar
          </Link>
        </div>

        <Styled.ProductContent>
          <Image
            src="https://images.unsplash.com/photo-1694976532214-0226d426df4c?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Caneca"
            width={640}
            height={580}
          />

          <div className="content">
            <span className="content__category">Caneca</span>
            <h1 className="content__title">Caneca de cerâmica rústica</h1>
            <div className="content__price">R$ 40,00</div>
            <span className="content__observation">
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </span>
            <div className="content__description">
              <div className="content__description--title">Descrição</div>

              <p>
                Aqui vem um texto descritivo do produto, esta caixa de texto
                servirá apenas de exemplo para que simule algum texto que venha
                a ser inserido nesse campo, descrevendo tal produto.
              </p>
            </div>
            <div className="content__add-cart">
              <Button startIcon={<ShoppingBagOpenIcon />} variant="secondary">
                ADICIONAR AO CARRINHO
              </Button>
            </div>
          </div>
        </Styled.ProductContent>
      </Styled.ShowContainer>
    </DefaultLayout>
  );
};
