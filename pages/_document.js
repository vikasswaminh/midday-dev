import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="google-site-verification" content="iBuOeYoJMkmqtUH62y2Vt9re2eMyPupOa3a5w3ifFCA"></meta>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"></link>
          <meta charSet="utf-8"></meta>
          <link rel="apple-touch-icon-precomposed" href="https://brizy.b-cdn.net/media/iW=180&amp;iH=any/fef73802e88b166ca7724ea55b3f4a64.jpg"></link>
          <meta property="og:type" content="website"></meta>
          <meta property="og:site_name" content="Networkers Home"></meta>
          <meta content="summary_large_image" name="twitter:card"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
