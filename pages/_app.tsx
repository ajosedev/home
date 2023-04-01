import type { AppProps } from 'next/app';
import { News_Cycle } from 'next/font/google';
import '../styles/globals.css';

const newsCycle = News_Cycle({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className={newsCycle.className}>
                <Component {...pageProps} />
            </div>
        </>
    );
}
