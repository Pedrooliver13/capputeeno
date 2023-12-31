'use client';

// Packages
import { createGlobalStyle } from 'styled-components';

// Styles
import { Container } from 'styles/container';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props): string => props.theme.colors.gray};
  }

  body {
    background-color: ${({ theme }): string => theme.colors.background};
    color: ${({ theme }): string => theme.colors['base-text']};
    font-weight: 400;
    scroll-behavior: smooth;
    --webkit-font-smoothing: antialised;
  }

  main {
    flex-grow: 1;
  }

  body,
  input,
  textarea,
  button {
    font-weight: 400;
    font-family: ${({ theme }): string => theme.fonts.default};
    font-size: ${({ theme }): string => theme.textSizes['text-m']};
  }

  a, li {
    text-decoration: none;
    list-style: none;
    color: inherit;
  }

  .container {
    ${Container};
  }
`;
