import "styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { APP_NAME } from "lib/constant";
import Command from "components/Command";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title> Google {APP_NAME} </title>
      </Head>

      <ThemeProvider defaultTheme="dark" attribute="class">
        <Navbar />
        <Sidebar />

        <div className="w-10/12 sm:w-3/4 m-auto p-3">
          {pathname === "/" && <Command />}
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
