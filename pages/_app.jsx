import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "../Components/Style/theme";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
