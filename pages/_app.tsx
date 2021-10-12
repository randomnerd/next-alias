import '../styles/globals.css';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import { PageTransition } from 'next-page-transitions';

Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`);
    NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
const TIMEOUT = 400

const Loader = () => (
    <div className="loader">
      <style jsx>{`
        .loader {
          border: 8px solid #f3f3f3; /* Light grey */
          border-top: 8px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 2s linear infinite;
          margin-left: auto;
          margin-right: auto;
          margin-top: 40px;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
        <PageTransition
            timeout={TIMEOUT}
            classNames="page-transition"
            loadingComponent={<Loader />}
            loadingDelay={500}
            loadingTimeout={{
                enter: TIMEOUT,
                exit: 0,
            }}
            loadingClassNames="loading-indicator"
        >
            <Component {...pageProps} />
        </PageTransition>
        <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(-100%, 0, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: transform ${TIMEOUT}ms;
        }
        .page-transition-exit {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: transform ${TIMEOUT}ms;
          transform: translate3d(100%, 0, 0);
        }
        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
          transform: translate3d(-100%, 0, 0);
        }
        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: transform ${TIMEOUT}ms;
        }
      `}</style>
        </>
    );
}
export default MyApp;
