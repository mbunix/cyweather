import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID, GtagNoscript } from "../lib/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8"></meta>
          <link rel="apple-touch-icon" sizes="180x180" href="../public/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon/android-chrome-192x192.png" />
          <link rel="manifest" href="../public/favicon/site.webmanifest" />
          <link rel="mask-icon" href="../public/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="../public/favicon/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="Tiny Minute Weather" />
          <meta name="application-name" content="Tiny Minute Weather" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff"></meta>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');         `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <GtagNoscript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;