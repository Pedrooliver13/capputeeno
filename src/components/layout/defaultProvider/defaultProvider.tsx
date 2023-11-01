// Packages
import isPropValid from '@emotion/is-prop-valid';
import { ReactElement, ReactNode } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

// Contexts
import { ProductContextProvider } from 'contexts/useProductContext';
import { CartContextProvider } from 'contexts/useCartContext';

// Libs
import StyledComponentsRegistry from 'lib/registry';

// Styles
import { GlobalStyle } from 'styles/global';
import { defaultTheme } from 'styles/theme/default';
import 'react-toastify/dist/ReactToastify.css';

interface DefaultProviderProps {
  children: ReactNode;
}

export const DefaultProvider = ({
  children,
}: DefaultProviderProps): ReactElement => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <CartContextProvider>
        <ProductContextProvider>
          <StyledComponentsRegistry>
            <StyleSheetManager
              enableVendorPrefixes
              shouldForwardProp={(propName, elementToBeRendered) => {
                return typeof elementToBeRendered === 'string'
                  ? isPropValid(propName)
                  : true;
              }}
            >
              <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                {children}
                <ToastContainer draggable={false} autoClose={3000} />
              </ThemeProvider>
            </StyleSheetManager>
          </StyledComponentsRegistry>
        </ProductContextProvider>
      </CartContextProvider>
    </QueryClientProvider>
  );
};
