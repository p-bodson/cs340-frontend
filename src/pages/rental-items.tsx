import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormRentalItems from '@/components/form-rental-items'
import FormRentalItemsPost from '@/components/form-rental-items-post'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Table from '@/components/table'

const RentalItems: NextPage = () => {

  const router = useRouter();
  const rental_items_path_root = router.asPath.replace('/','')
  const [rental_items_path, setRentalItemsPath] = useState(rental_items_path_root)
  
    return (
      <div className={styles.container}>
        <Head>
          <title>Rental Items</title>
          <meta name="description" content="rental items page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Rental Items</h1>
          <p>Welcome to the Rental Items page</p>

          <FormRentalItems 
            locator={rental_items_path_root}
            setPath={setRentalItemsPath}
          />
          <br />
          <FormRentalItemsPost
            locator={rental_items_path_root}
          />
          <br />
          <Table 
            locator={rental_items_path}
            caption={<b>Rental Items</b>}
          />

        </main>
  
      </div>
    )
  }
  
  export default RentalItems