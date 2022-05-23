import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Head from "next/head";

const theme = createTheme({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pontus Vallgren</title>
        <meta name='description' content='CV-Portfolio Pontus Vallgren' />
        <link rel='icon' href='/icon.png' />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
