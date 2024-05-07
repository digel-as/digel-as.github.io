import { AppProps } from "next/app";

import "../styles/main.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Digel</title>
      <meta
        name="description"
        content={
          "Digel is a newly founded company consisting of passionate engineers with backgrounds from cybernetics and robotics, and industrial IT. Our consultants offer a broad range of expertise within automation systems, Operational Technology (OT) and Information Technology (IT). We are equipped to help you handle most problems ranging from embedded software development, designing and instrumentation of control and automation systems, as well as cloud/backend solutions, frontend development, and managing large amounts of timeseries data."
        }
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
