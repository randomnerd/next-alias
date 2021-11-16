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

const Loader = () => <div className="loader" />

const useTransitionDirection = () => {
    const router = useRouter()
    const [lastIdx, setLastIdx] = useState(0)
    const [reverse, setReverse] = useState(false)

    const newRouteHandler = () => {
        setLastIdx(window.history.state.idx)
        if (reverse) setTimeout(() => setReverse(false), 400)
    }

    useEffect(() => {
        router.beforePopState((s: any) => (setReverse(lastIdx > s.idx), true))
        router.events.on('routeChangeComplete', newRouteHandler)
        return () => router.events.off('routeChangeComplete', newRouteHandler)
    })
    return reverse
}

let clientScope: any

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
                <Suspense fallback={<Loader/>}>
            <AnimatePresence exitBeforeEnter initial={false}>
                <motion.div
                    initial={{ x: rev ? '-80vw' : '80vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: rev ? '80vw' : '-80vw', opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    key={router.route}
                    className="Page"
                >
                    <Container className={`text-center ${Component.name || Component.displayName}`}>
                        <Component {...pageProps} />
                    </Container>
                </motion.div>
            </AnimatePresence>
                    </Suspense>
        </div>
        </Provider>
    );
}

export default MyApp
