import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith('/admin');

  // const Layout = isAdminRoute ? AdminLayout : ClientLayout;
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
