'use client';

// Packages
import { ReactElement } from 'react';
import Image from 'next/image';
import { Trash as TrashIcon } from 'phosphor-react';

// Styles
import * as Styled from './styles';

export const CartCard = (): ReactElement => {
  return (
    <Styled.CartCardComponent>
      <Image
        src="https://images.unsplash.com/photo-1694976532214-0226d426df4c?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Caneca"
        width={256}
        height={211}
        loading="lazy"
      />

      <div className="content">
        <div className="content__header">
          <h2 className="content__header--title">Caneca de cerâmica rústica</h2>
          <TrashIcon size={24} />
        </div>
        <p className="content__description">
          Aqui vem um texto descritivo do produto, esta caixa de texto servirá
          apenas de exemplo para que simule algum texto que venha a ser inserido
          nesse campo, descrevendo tal produto.
        </p>

        <div className="content__footer">
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>

          <div className="content__footer--price">R$ 40,00</div>
        </div>
      </div>
    </Styled.CartCardComponent>
  );
};
