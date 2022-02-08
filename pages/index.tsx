import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
          transfer of resources between  members and libraries. {' '}
          The resources are books.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Members &rarr;</h2>
            <p>See registered members.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Libraries &rarr;</h2>
            <p>See the libraries registered.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Resources &rarr;</h2>
            <p>See the resources available.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Books {'&'} Authors &rarr;</h2>
            <p>See the Books and Authors known to the network.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Rentals &rarr;</h2>
            <p>See the rental requests made.</p>
          </a>       

          <a href="#" className={styles.card}>
            <h2>Transfers &rarr;</h2>
            <p>See the transfers made between libraries.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Rental Items &rarr;</h2>
            <p>See what resources are rented.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Transfer Items &rarr;</h2>
            <p>See what resources are transferred.</p>
          </a>

          

        </div>
      </main>

      <footer className={styles.footer}>
       Created by Kevin Peralta and Liam Gombart
      </footer>
    </div>
  )
}

export default Home
