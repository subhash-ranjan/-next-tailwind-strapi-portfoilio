import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { client, ApolloProvider } from '../lib/apollo';
import { AppContext, AppContextProvider } from '../contexts/AppContext';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { LoaderSquare, LoaderCircle } from '../svgs';

function MyApp({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) setLoading(false);
    }, []);

    return (
        <>
            {loading ? (
                <div className="h-[100vh] w-[100vw] bg-slate-900 flex-row-center-center">
                    <LoaderCircle classes="fill-white" height="60" width="60" />
                </div>
            ) : (
                <ApolloProvider client={client}>
                    <AppContextProvider>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </AppContextProvider>
                </ApolloProvider>
            )}
        </>
    );
}

export default MyApp;
