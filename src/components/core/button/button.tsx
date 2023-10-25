// Packages
import { ReactElement, ButtonHTMLAttributes, ReactNode } from 'react';

// Styles
import * as Styled from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactNode;
  children: ReactNode;
  variant?: Styled.ButtonStyleType;
}

export const Button = ({ children, ...props }: ButtonProps): ReactElement => {
  return (
    <Styled.ButtonContainer {...props}>
      {props.startIcon && props.startIcon}
      {children}
    </Styled.ButtonContainer>
  );
};