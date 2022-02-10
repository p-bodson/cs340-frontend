import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Transfers: NextPage = () => {
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

          <form>

            <fieldset>
                <legend> Find Transfer Orders in the Super Duper Library Network </legend>
                <p>Fill out zero or more of the fields below to find matching transfers</p>
                <label>
                    Transfer ID: <input type="number" name="transfer_ID"/>
                </label>
                <br/>
                <label>
                    Source Library ID: <input type="number" name="source_library_ID" />
                </label>
                <br/>
                <label>
                    Destination Library ID: <input type="number" name="destination_library_ID" />
                </label>
                <br/>
                <label>
                    Transfer Date: <input type="date" name="transfer_date" />
                </label>
                <br/>
                <br />
                <input type="submit" value="Search" />
            </fieldset>
            <br />

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

          <table>
              <caption><b>Search Results</b></caption>
              <thead>
                <tr>
                  <th>transfer_ID</th>
                  <th>source_library_ID</th>
                  <th>destination_library_ID</th>
                  <th>transfer_date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <Link href="/transfer-items">
                    <a style={{color: "blue" }} >202</a>
                    </Link>
                  </td>
                  <td>1</td>
                  <td>3</td>
                  <td>2022-02-10</td>
                  <td>
                      <button>DELETE</button>
                  </td>
                </tr>
              </tbody>
          </table>
          <p>Click on a transfer_ID above to be taken to that transfer{"'"}s transfer_items page</p>

        </main>
      </div>
    )
  }
  
  export default Transfers