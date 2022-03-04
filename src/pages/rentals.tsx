import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormRentals from '@/components/form-rentals'
import FormRentalsPost from '@/components/form-rentals-post'
import { useState } from 'react'
import Table from '@/components/table'


const Rentals: NextPage = () => {

  const rentals_path_root = "rentals"
  const [rentals_path, setRentalsPath] = useState(rentals_path_root)

  return (
      <div className={styles.container}>
        <Head>
          <title>Rentals</title>
          <meta name="description" content="Rentals page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Rentals</h1>
          <p>Welcome to the Rentals page</p>

          <FormRentals
            locator={rentals_path_root}
            setPath={setRentalsPath}
          />
          <FormRentalsPost locator="rentals"/>
          <br />
          <Table 
            locator={rentals_path}
            caption={<b>Rentals</b>}
          />
          <ul>
            <li>Clicking on a rental_ID above redirects to that rental{"'"}s rental_items page</li>
            <li>Clicking DELETE button deletes that rental along with its associated rental_items</li>
          </ul>
        </main>
      </div>
    )
  }
  
  export default Rentals