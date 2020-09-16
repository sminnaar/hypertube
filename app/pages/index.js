import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hypertube</title>
        <link rel="icon" href="/hyper.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/">Hypertube</Link>
        </h1>
        <div className={styles.grid}>
          
          <Link href='/login' className={styles.card}>
            <a className={styles.card}>
              <h3>Login &rarr;</h3>
              <p>With Hypertube acount, 42 Intra or Google</p>
            </a>
          </Link>

          <Link href='/register' className={styles.card}>
            <a className={styles.card}>
              <h3>Register &rarr;</h3>
              <p>Create new account with Hypertube</p>
            </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/sminnaar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by sminnaar{' '}
          <img src="/github2.png" alt="Github logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
