'use client';

// Packages
import { ReactNode, createContext, useContext, useState } from 'react';

export type ProductContextProps = {
  page: number;
  sortBy: 'news' | 'topseller' | 'descending' | 'ascending' | string;
  totalResults: number;
  category: string;
  handleChangeCategory: (value: string) => void;
  handleChangeSortBy: (value: string) => void;
  handleChangePage: (value: number) => void;
  handleChangeTotalResults: (value: number) => void;
  resetAll: () => void;
};

interface ProductContextProviderProps {
  children: ReactNode;
}

const ProductContext = createContext({} as ProductContextProps);

const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [sortBy, setSortBy] = useState('');
  const [category, setCategory] = useState('');

  const resetAll = (): void => {
    setPage(0);
    setSortBy('');
    setCategory('');
  };

  const handleChangeCategory = (value: string): void => {
    setCategory(value);
  };

  const handleChangeSortBy = (value: string): void => {
    setSortBy(value);
  };

  const handleChangePage = (value: number): void => {
    setPage(value);
  };

  const handleChangeTotalResults = (value: number): void => {
    setTotalResults(value);
  };

  return (
    <ProductContext.Provider
      value={{
        page,
        totalResults,
        sortBy,
        category,
        handleChangeCategory,
        handleChangeSortBy,
        handleChangePage,
        handleChangeTotalResults,
        resetAll,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { ProductContext, ProductContextProvider, useProductContext };
