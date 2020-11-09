import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Name Contest</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
         <a href="https://www.handshake.org/"><img src="/favicon.png" alt="Handshake Logo" height="50"/>
      </a> Name Contest
        </h1>

        <p className={styles.description}>
          Handshake is a community-run decentralized blockchain built to dismantle ICANN&#39;s monopoly on top-level domains.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

    <footer>
      <a
        href="https://www.namebase.io/">
        <img src="/Namer Community Logo.gif" alt="Namebase Logo" width="40" height="40"/>
      </a>
    </footer>
    
    </div>
  )
}
