import "@/styles/globals.css";
import store from "@/store";
import { Provider } from "react-redux";
import MainApp from "@/App.jsx";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainApp>
        <Component {...pageProps} />
      </MainApp>
    </Provider>
  );
}
