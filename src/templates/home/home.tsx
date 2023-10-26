// Packages
import { ReactElement } from 'react';
import Link from 'next/link';

// import { Notepad as NotepadIcon } from 'phosphor-react';

// Components
import { Card, Pagination, FilterByPriority } from 'components/core';
import { DefaultLayout } from 'components/layout';

// Styles
import * as Styled from './styles';

export const HomeTemplate = (): ReactElement => {
  return (
    <DefaultLayout>
      <Styled.CategoryContainer className="container">
        <ul className="category">
          <li className="active">
            <Link href="/">Todos os produtos</Link>
          </li>
          <li>
            <Link href="/">Camisetas</Link>
          </li>
          <li>
            <Link href="/">Canecas</Link>
          </li>
        </ul>
        <FilterByPriority
          label="Ordernar por"
          options={[
            { label: 'Novidades', value: 'novidades' },
            { label: 'Preço Maior - menor', value: 'preco-menor' },
            { label: 'Preço Maior - maior', value: 'preco-maior' },
            { label: 'Mais vendidos', value: 'mais-vendidos' },
          ]}
        />
      </Styled.CategoryContainer>
      <Pagination />
      <Styled.ProductsList className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        {/* <div className="message">
          <NotepadIcon size={100} />
          <h1>Nenhum produto encontrado!</h1>
        </div> */}
      </Styled.ProductsList>
      <Pagination />
    </DefaultLayout>
  );
};
