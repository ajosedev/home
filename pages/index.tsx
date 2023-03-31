import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>ajosedev</title>
                <meta
                    name="description"
                    content="ajosedev's little corner of the internet"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>Hello world.</main>
        </>
    );
}
