import { Analytics } from '@vercel/analytics/react';
import cn from 'classnames';
import Command from 'components/Command';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import { ThemeProvider } from 'next-themes';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';

import type { AppProps } from 'next/app';

import 'styles/globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700', '900'],
});

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title> Google Keep </title>
        <meta name='description' content='A Google Keep Clone' />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://gkeep.vercel.app' />
        <meta property='og:title' content='Google Keep' />
        <meta property='og:description' content='A Google Keep Clone' />
        <meta
          property='og:image'
          content='https://gkeep.vercel.app/banner.png'
        />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://gkeep.vercel.app' />
        <meta property='twitter:title' content='Google Keep' />
        <meta property='twitter:description' content='A Google Keep Clone' />
        <meta
          property='twitter:image'
          content='https://gkeep.vercel.app/banner.png'
        />
      </Head>

      <ThemeProvider defaultTheme='dark' attribute='class'>
        <Navbar />
        <Sidebar />

        <main
          className={cn(
            roboto.variable,
            'm-auto max-w-xs font-body md:max-w-xl lg:max-w-5xl'
          )}
        >
          {pathname === '/' && <Command />}
          <Component {...pageProps} />
        </main>
      </ThemeProvider>

      <Analytics />
    </>
  );
}

export default MyApp;
