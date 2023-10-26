// Packages
import isPropValid from '@emotion/is-prop-valid';
import { ReactElement, ReactNode } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

// Libs
import StyledComponentsRegistry from 'lib/registry';

// Styles
import { GlobalStyle } from 'styles/global';
import { defaultTheme } from 'styles/theme/default';

interface DefaultProviderProps {
  children: ReactNode;
}

export const DefaultProvider = ({
  children,
}: DefaultProviderProps): ReactElement => {
  return (
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
        </ThemeProvider>
      </StyleSheetManager>
    </StyledComponentsRegistry>
  );
};
