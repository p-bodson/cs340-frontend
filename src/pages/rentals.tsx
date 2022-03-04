import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormRentals from '@/components/form-rentals'
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
          <form>
            <fieldset>
                <legend> Add a Rental Order </legend>
                <p>Fill out the form below with the information of the new member</p>
                <label>
                    Member ID: <input type="number" name="member_ID" />
                </label>
                <br/>
                <label>
                    Library ID: {' '}
                    <select name="library_ID">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </label>
                <br/>
                <label>
                    Rental Date: <input type="date" name="rental_date" />
                </label>
                <br />
                <br />
                <input type="submit" value="Add Rental" />
            </fieldset>
          </form>
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