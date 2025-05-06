import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const title = "Vital Care Supplies Inc.";
  const description ="Trusted source for quality compression stockings, orthopedic supports, and medical wellness products in Canada.";
  return (
    <Html lang="en">
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
        
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={process.env.URL} />
        <meta property="og:image" content={process.env.URL + ""} />
        
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
