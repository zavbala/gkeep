import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />

        <link
          rel='preconnect'
          crossOrigin='anonymous'
          href='https://fonts.gstatic.com'
        />

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Icons&display=swap'
        />

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Icons+Outlined&display=swap'
        />

        <link
          rel='shortcut icon'
          type='image/x-icon'
          href='https://ssl.gstatic.com/keep/keep_2020q4v2.ico'
        />
      </Head>

      <body className='bg-white dark:bg-shark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
