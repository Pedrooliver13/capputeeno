// Packages
import { ReactElement } from 'react';
import { MagnifyingGlass as MagnifyingGlassIcon } from 'phosphor-react';

// Styles
import * as Styled from './styles';

export const Input = (): ReactElement => {
  return (
    <Styled.InputContainer>
      <input type="text" placeholder="Procurando algo específico?" />
      <button type="submit">
        <MagnifyingGlassIcon size={24} />
      </button>
    </Styled.InputContainer>
  );
};
