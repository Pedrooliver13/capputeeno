// Packages
import { ReactElement, InputHTMLAttributes, ReactNode } from 'react';

// Styles
import * as Styled from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export const Input = (props: InputProps): ReactElement => {
  return (
    <Styled.InputContainer>
      <input {...props} />
      {props.icon && <button type="submit">{props.icon}</button>}
    </Styled.InputContainer>
  );
};
