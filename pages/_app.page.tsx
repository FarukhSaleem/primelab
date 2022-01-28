import { ThemeProvider, CssBaseline } from "@mui/material";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import lightTheme from "../styles/Theme/LightTheme";
import store from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
