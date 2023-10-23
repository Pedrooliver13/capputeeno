// Packages
import { ReactElement, ReactNode } from 'react';

// Components
import { Header } from 'components/core';

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({
  children,
}: DefaultLayoutProps): ReactElement => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
