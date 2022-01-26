import { ThemeProvider, CssBaseline } from "@mui/material";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import lightTheme from "../styles/Theme/LightTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
