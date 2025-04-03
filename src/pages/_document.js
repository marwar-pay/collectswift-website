import { Html, Head, Main, NextScript } from 'next/document';



export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" type="image/svg+xml/png" href="/images/logo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>


      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
