// Packages
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

// Contexts
import { useProductContext } from 'contexts/useProductContext';

// Services
import { fetchData } from 'services';
import { GetAllProductsOperation } from 'services/products';
import { getAllProductsQuery } from 'services/queries/products';

const formatOrderList = {
  news: ['created_at', 'DESC'],
  topseller: ['sales', 'DESC'],
  descending: ['price_in_cents', 'DESC'],
  ascending: ['price_in_cents', 'ASC'],
};

export const useProducts = () => {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get('search') || '';

  const { page, category, sortBy, handleChangeTotalResults } =
    useProductContext();

  const currentSort =
    formatOrderList[(sortBy as keyof typeof formatOrderList) || 'news'];

  const currentFilter =
    !searchValue && !category
      ? {}
      : searchValue && !category
      ? { q: searchValue }
      : { q: searchValue, category };

  const { data, isFetching, isError } = useQuery({
    queryFn: () =>
      fetchData<GetAllProductsOperation>({
        query: getAllProductsQuery,
        variables: {
          filter: currentFilter,
          sortField: currentSort[0],
          sortOrder: currentSort[1],
          page,
          perPage: 12,
        },
      }),
    queryKey: ['allProducts', category, page, sortBy, searchParams],
    staleTime: 1000 * 60 * 1,
  });

  useEffect(() => {
    if (data?.body) {
      handleChangeTotalResults(data.body.data.total.count);
    }
  }, [handleChangeTotalResults, data?.body]);

  return {
    data: data?.body?.data?.allProducts,
    total: data?.body?.data?.total?.count,
    isFetching,
    isError,
  };
};
