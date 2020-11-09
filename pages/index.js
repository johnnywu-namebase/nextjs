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
         <a href="https://www.handshake.org/"><img src="/favicon.png" alt="Handshake Logo" height="100"/>
      </a> Name Contest
        </h1>

        <p className={styles.description}>
          Handshake is a community-run decentralized blockchain built to dismantle ICANN&#39;s monopoly on top-level domains.
        </p>

        <p className={styles.description}>
          To help showcase interesting uses of Handshake names, the <a href="https://discord.com/invite/V3aTrkp">Namer Community</a> is running a Name Contest! The top 5 Namers with the most creative uses of Handshake names will each win free <a href="https://shop.namebase.io/">Director of Handshake T-shirts</a>.
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
        <img src="/Namer Community Logo.gif" alt="Namebase Logo" width="70" height="70"/>
      </a>
    </footer>
    
    </div>
  )
}
