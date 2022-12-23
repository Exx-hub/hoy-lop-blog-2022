import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Hoy Lop!</title>
        <meta name="title" property="og:title" content="Personal Blog" />
        <meta
          name="description"
          property="og:description"
          content="Personal Blog Website"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Alvin Flores Acosta" />
        <meta
          name="url"
          property="og:url"
          content="https://hoy-lop.vercel.app/"
        />
        <meta
          name="image"
          property="og:image"
          content="https://i.ibb.co/9rjNtRV/hoylop.png"
        />
        {/* <link rel="icon" href="/alv.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
