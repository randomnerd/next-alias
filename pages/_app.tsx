import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { withHydrate } from "effector-next";
import React, { useEffect, useState } from 'react';
const enhance = withHydrate();
import { useRouter } from 'next/dist/client/router';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const GoBack = () => {
    const router = useRouter()
    return router.route === '/'
        ? null
        : (
            <Button
                className="back"
                // icon
                onClick={() => router.back()}
            >
                {/* <Icon name="arrow left" /> */}
                &laquo;
            </Button>
        )
}

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
);

const useTransitionDirection = () => {
    const router = useRouter()
    const [lastIdx, setLastIdx] = useState(0)
    const [reverse, setReverse] = useState(false)
    useEffect(() => {
        router.beforePopState((newState: any) => {
            setReverse(lastIdx > newState.idx)
            return true
        })
        const newRouteHandler = (...args: any) => {
            const currentIdx = window.history.state.idx
            setLastIdx(currentIdx)
            if (reverse) setTimeout(() => setReverse(false), 400)
        }
        router.events.on('routeChangeComplete', newRouteHandler)
        return () => {
            router.events.off('routeChangeComplete', newRouteHandler)
        }
    })
    return reverse
}

const Heading = () => (
    <Container className="text-center">
        {/* <GoBack/> */}
        <h1>ALIAS</h1>
    </Container>
)

function MyApp({ Component, pageProps }: AppProps) {
    const rev = useTransitionDirection()
    const router = useRouter()
    return (
        <div className="App">
        <Heading />
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                initial={{ x: rev ? '-80vw' : '80vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: rev ? '80vw' : '-80vw', opacity: 0 }}
                key={router.route}
                transition={{ duration: 0.25 }}
                className="Page"
            >
                <Container className={`text-center ${Component.name || Component.displayName}`}>
                        <Component {...pageProps} />
                </Container>
            </motion.div>
        </AnimatePresence>
        </div>
    );
}
export function reportWebVitals(metric: NextWebVitalsMetric) {
    console.log(metric)
}

export default
enhance(
    MyApp
);
