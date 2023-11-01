'use client';

// Packages
import { ReactElement } from 'react';
import { Notepad as NotepadIcon } from 'phosphor-react';

// Components
import { Pagination } from 'components/shared';
import { Card, CardSkeleton } from 'components/core';

// Hooks
import { useProducts } from 'hooks/useProducts';

// Styles
import * as Styled from './styles';

export const ProductsList = (): ReactElement => {
  const { data: listProducts, isFetching } = useProducts();

  return (
    <>
      <Pagination />
      <main>
        <Styled.ProductsList className="container">
          {isFetching &&
            Array(12)
              .fill('')
              .map((_, index) => <CardSkeleton key={index} />)}

          {listProducts?.map((product) => (
            <Card key={product?.id} {...product} />
          ))}

          {!isFetching && !listProducts?.length && (
            <div className="message">
              <NotepadIcon size={100} />
              <h1>Nenhum produto encontrado!</h1>
            </div>
          )}
        </Styled.ProductsList>
      </main>
      <Pagination />
    </>
  );
};
