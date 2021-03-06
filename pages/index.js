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
    
        <p className={styles.subtitle}>
          November 8th, 2020 to November 22nd, 2020
        </p>

        <p className={styles.description}>
          Handshake is a community-run decentralized blockchain built to dismantle ICANN&#39;s monopoly on top-level domains.
        </p>

        <p className={styles.description}>
          To help showcase interesting uses of Handshake names, the <a href="https://discord.com/invite/V3aTrkp">Namer Community</a> is running a Name Contest! The top 5 Namers with the most creative resolving Handshake names will each win 100 HNS and free <a href="https://shop.namebase.io/">Director of Handshake T-shirts</a>. Existing examples of creative name uses include <a href="http://jingle.bells.hns.to/">jingle.bells/</a> and <a href="http://firstruleof.xn--club-4p14c.hns.to/">firstruleof.🥊club/</a>. If you have an idea but need help with building it, ask for support in the <a href="https://discord.com/invite/V3aTrkp">Namer Community</a>!
        </p>
    
        <p className={styles.description}>
          Please use the submission form below to submit your name. Winners will be decided through community voting, which will open from November 23rd to November 29th.
        </p>
    
        <div className={styles.grid}>
            <h3>Submit Name &rarr;</h3>
            <p>Submissions closed as of November 22nd.</p>


            <h3>Vote &rarr;</h3>
            <p>Voting closed as of November 29th.</p>

        </div>
      </main>
      <p className={styles.subtitle}>
          Happy naming!
     </p>
    <footer>
      <a
        href="https://discord.com/invite/V3aTrkp">
        <img src="/Namer Community Logo.gif" alt="Namebase Logo" width="70" height="70"/>
      </a>
    </footer>
    
    </div>
  )
}
