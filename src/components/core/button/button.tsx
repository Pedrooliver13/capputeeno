// Packages
import { ReactElement, ButtonHTMLAttributes, ReactNode } from 'react';

// Styles
import * as Styled from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactNode;
  children: ReactNode;
  variant?: Styled.ButtonStyleType;
}

export const Button = ({
  children,
  startIcon,
  ...props
}: ButtonProps): ReactElement => {
  return (
    <Styled.ButtonContainer {...props}>
      {startIcon && startIcon}
      {children}
    </Styled.ButtonContainer>
  );
};
