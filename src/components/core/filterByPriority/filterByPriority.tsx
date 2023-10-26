// Packages
import { useCallback, useState } from 'react';
import { CaretDown as CaretDownIcon } from 'phosphor-react';

// Styles
import * as Styled from './styles';

interface OptionDropdown {
  label: string;
  value: string;
}

interface FilterDropdownProps {
  label: string;
  options: Array<OptionDropdown>;
}

export const FilterByPriority = ({
  label,
  options,
}: FilterDropdownProps): any => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen((state) => !state);
  }, []);

  const handleClick = (value: string) => {
    console.log('Ativei', value);
    handleOpen();
  };

  return (
    <>
      <Styled.FilterContainer>
        <button onClick={handleOpen}>
          {label}
          <CaretDownIcon />
        </button>
        {isOpen && (
          <>
            <ul className="dropdown">
              {options.map((option) => (
                <li
                  key={option.value}
                  onClick={() => handleClick(option.value)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </>
        )}
      </Styled.FilterContainer>
    </>
  );
};
