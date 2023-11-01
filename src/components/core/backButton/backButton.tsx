// Packages
import { ReactElement } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowCircleLeft as ArrowCircleLeftIcon } from 'phosphor-react';

// Styles
import * as Styled from './styles';

export const BackButton = (): ReactElement => {
  const router = useRouter();

  return (
    <Styled.BackButtonContainer>
      <button onClick={() => router.back()}>
        <ArrowCircleLeftIcon size={24} /> Voltar
      </button>
    </Styled.BackButtonContainer>
  );
};
