import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CS340 Project</title>
        <meta name="description" content="project of OSU CS340 class" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Super Duper Library Network
        </h1>

        <p className={styles.description}>
          Here is the Super Duper Library Network that manages the {' '}
          rental of resources between members and libraries. {' '}
        </p>

        <div className={styles.grid}>
          <Link href="/members">
            <a className={styles.card}>
              <h2>Members &rarr;</h2>
              <p>See registered members.</p>
            </a>
          </Link>

          <Link href="/libraries">
            <a className={styles.card}>
              <h2>Libraries &rarr;</h2>
              <p>See the libraries registered.</p>
            </a>
          </Link>

          <Link href="/resources">
            <a className={styles.card}>
              <h2>Resources &rarr;</h2>
              <p>See the resources available.</p>
            </a>
          </Link>

          <Link href="/books-and-authors">
            <a className={styles.card}>
              <h2>Books {'&'} Authors &rarr;</h2>
              <p>Search all the Books and Authors known to the network.</p>
            </a>
          </Link>

          <Link href="/authors">
            <a className={styles.card}>
              <h2>Authors &rarr;</h2>
              <p>See and edit the Authors known to the network.</p>
            </a>
          </Link>

          <Link href="/books">
            <a className={styles.card}>
              <h2>Books &rarr;</h2>
              <p>See and edit the Books known to the network.</p>
            </a>
          </Link>

          <Link href="/rentals">
            <a className={styles.card}>
              <h2>Rentals &rarr;</h2>
              <p>See the rental requests made.</p>
            </a>
          </Link> 

        </div>
      </main>
    </div>
  )
}

export default Home
