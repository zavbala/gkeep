import Command from 'components/Command';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import { APP_NAME } from 'lib/constant';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title> Google {APP_NAME} </title>
      </Head>

      <ThemeProvider defaultTheme='dark' attribute='class'>
        <Navbar />
        <Sidebar />

        <div className='mx-auto w-3/4'>
          {pathname === '/' && <Command />}
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
