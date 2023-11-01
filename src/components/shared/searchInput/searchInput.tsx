// Packages
import { ReactElement } from 'react';
import { MagnifyingGlass as MagnifyingGlassIcon } from 'phosphor-react';
import { useSearchParams } from 'next/navigation';

// Components
import { Input } from 'components/core';

// Contexts
import { useProductContext } from 'contexts/useProductContext';

export const SearchInput = (): ReactElement => {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get('search');

  const { handleChangeCategory, handleChangeSortBy } = useProductContext();

  const handleSubmit = () => {
    handleChangeCategory('');
    handleChangeSortBy('');
  };

  return (
    <form onSubmit={handleSubmit} action="/">
      <Input
        id="search"
        type="search"
        name="search"
        defaultValue={searchValue || ''}
        placeholder="Procurando por algo específico?"
        icon={<MagnifyingGlassIcon size={24} />}
        aria-label="Search"
      />
    </form>
  );
};
