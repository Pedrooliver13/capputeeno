'use client';

// Packages
import { ReactElement } from 'react';

// Components
import { FilterByPriority } from 'components/shared';

// Contexts
import { useProductContext } from 'contexts/useProductContext';

// Styles
import * as Styled from './styles';

export const FilterBar = (): ReactElement => {
  const { category, handleChangeCategory, handleChangePage } =
    useProductContext();

  return (
    <Styled.CategoryContainer className="container">
      <ul className="category">
        <li
          className={!category ? 'active' : ''}
          onClick={() => {
            handleChangePage(0);
            handleChangeCategory('');
          }}
        >
          Todos os produtos
        </li>
        <li
          className={category === 't-shirts' ? 'active' : ''}
          onClick={() => {
            handleChangePage(0);
            handleChangeCategory('t-shirts');
          }}
        >
          Camisetas
        </li>
        <li
          className={category === 'mugs' ? 'active' : ''}
          onClick={() => {
            handleChangePage(0);
            handleChangeCategory('mugs');
          }}
        >
          Canecas
        </li>
      </ul>
      <FilterByPriority
        label="Ordernar por"
        options={[
          { label: 'Novidades', value: 'news' },
          { label: 'Preço Maior - menor', value: 'ascending' },
          { label: 'Preço Maior - maior', value: 'descending' },
          { label: 'Mais vendidos', value: 'topseller' },
        ]}
      />
    </Styled.CategoryContainer>
  );
};
