import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssVarsProvider>
        <Sheet variant="outlined">Hallo!</Sheet>
      </CssVarsProvider>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
