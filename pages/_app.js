import "../styles/globals.css";
import theme from "../utils/theme";
import { ThemeProvider } from "theme-ui";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
