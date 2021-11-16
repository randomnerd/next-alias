import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';
import React, { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import {Provider} from 'effector-react/scope'
import { serialize, fork } from 'effector'

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

let clientScope: Scope

function MyApp({ Component, pageProps }: AppProps) {
    const scope = fork({
        values: {
            ...(clientScope && serialize(clientScope)),
            ...pageProps.initialState,
        },
    })
    if (typeof window !== 'undefined') clientScope = scope
    console.log('scope', serialize(scope))

    const rev = useTransitionDirection()
    const router = useRouter()
    return (
        <Provider value={scope}>
        <div className="App">
            <Container className="text-center">
                <h1><Link href="/">ALIAS</Link></h1>
            </Container>
            <AnimatePresence exitBeforeEnter initial={false}>
                <motion.div
                    initial={{ x: rev ? '-80vw' : '80vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: rev ? '80vw' : '-80vw', opacity: 0 }}
                    key={router.route}
                    transition={{ duration: 0.25 }}
                    className="Page"
                >
                    {/* <Suspense fallback={<Loader/>}> */}
                    <Container className={`text-center ${Component.name || Component.displayName}`}>
                        <Component {...pageProps} />
                    </Container>
                    {/* </Suspense> */}
                </motion.div>
            </AnimatePresence>
        </div>
        </Provider>
    );
}

export default MyApp
