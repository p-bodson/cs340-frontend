import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormTransfers from '@/components/form-transfers'
import { useState } from 'react'
import Table from '@/components/table'

const Transfers: NextPage = () => {

  const transfers_path_root = "transfers"
  const [transfers_path, setTransfersPath] = useState(transfers_path_root)
  

    return (
      <div className={styles.container}>
        <Head>
          <title>Transfers</title>
          <meta name="description" content="Transfers page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Transfers</h1>
          <p>Welcome to the Transfers page</p>

          <FormTransfers 
            locator={transfers_path_root}
            setPath={setTransfersPath}
          />
          <form>
            <fieldset>
                <legend> Add a Transfer Order </legend>
                <p>Fill out the form below with the information of the new transfer</p>
                <label>
                    Source Library ID: {' '}
                    <select name="source_library_ID">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </label>
                <br/>
                <label>
                    Destination Library ID: {' '}
                    <select name="destination_library_ID">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </label>
                <br/>
                <label>
                    Transfer Date: <input type="date" name="transfer_date" />
                </label>
                <br />
                <br />
                <input type="submit" value="Add Transfer" />
            </fieldset>
          </form>
          <br />
          <Table 
            locator={transfers_path}
            caption={<b>Transfers</b>}
          />
          <ul>
            <li>Clicking on a transfer_ID above redirects to that transfer{"'"}s transfer_items page</li>
            <li>Clicking DELETE button deletes that transfer along with its associated transfer_items</li>
          </ul>
        </main>
      </div>
    )
  }
  
  export default Transfers