import { Provider } from "react-redux";

import { wrapper } from "../Store/store";
import Layout from "../components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <div className="overflow-hidden">
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
}
