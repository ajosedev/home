import Head from 'next/head';
import styles from '../styles/Home.module.css';

const links = [
    {
        title: 'Garden',
        href: 'https://garden.ajose.dev',
    },
    {
        title: 'GitHub',
        href: 'https://github.com/ajosedev',
    },
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ajosedev',
    },
    {
        title: 'CodePen',
        href: 'https://codepen.io/ajosedev',
    },
];

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

            <main className={styles.main}>
                <span
                    className={`${styles.stripe} ${styles.topStripe}`}
                    aria-hidden="true"
                />
                <span
                    className={`${styles.stripe} ${styles.bottomStripe}`}
                    aria-hidden="true"
                />
                <header className={`${styles.header} fluid-type`}>
                    <div>
                        <h1 data-text="Andrew">Andrew</h1>
                        <h1 data-text="Jose">Jose</h1>
                    </div>
                </header>
                <div className={`${styles.role} fluid-type`}>
                    <p>Software</p>
                    <p>Engineer</p>
                </div>
                <nav className={styles.nav}>
                    <ul className="fluid-type">
                        {links.map((link) => (
                            <a key={link.href} href={link.href}>
                                {link.title}
                            </a>
                        ))}
                    </ul>
                </nav>
            </main>
        </>
    );
}
