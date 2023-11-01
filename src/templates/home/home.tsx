// Packages
import { ReactElement } from 'react';

// Components
import { DefaultLayout } from 'components/layout';
import { ProductsList } from './components/productList/productsList';
import { FilterBar } from './components/filterBar/filterBar';

export const HomeTemplate = (): ReactElement => {
  return (
    <DefaultLayout>
      <FilterBar />
      <ProductsList />
    </DefaultLayout>
  );
};
