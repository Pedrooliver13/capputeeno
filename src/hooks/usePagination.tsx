// Packages
import { useCallback, useMemo } from 'react';

interface UsePaginationProps {
  page: number;
  setPage: (value: number) => void;
  totalResults: number;
}

export const usePagination = ({
  page = 0,
  setPage,
  totalResults = 40,
}: UsePaginationProps) => {
  const limit = 12;
  const currentPage = Math.floor(page + 1);

  const lastPage = useMemo(
    () => Math.trunc(totalResults / limit),
    [totalResults]
  );

  const handleNextPage = useCallback(() => {
    return setPage(page + 1);
  }, [page, setPage]);

  const handlePrevPage = useCallback(() => {
    return setPage(page - 1);
  }, [page, setPage]);

  const handlePageChange = useCallback(
    (page: number) => {
      return setPage(page);
    },
    [setPage]
  );

  return {
    page,
    lastPage,
    currentPage,
    handleNextPage,
    handlePrevPage,
    handlePageChange,
  };
};
