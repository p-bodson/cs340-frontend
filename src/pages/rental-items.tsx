import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Rental_Items: NextPage = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>Rental Items</title>
          <meta name="description" content="Rental Items page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Rental Items</h1>
          <p>This is the Rental Items page for Rental with rental_ID 101</p>

          <form>
            <fieldset>
                <legend> Add a Rental Item </legend>
                <p>Provide the resource ID of the the rental item to add</p>
                <label>
                    Resource ID: <input type="number" name="resource_ID" />
                </label>
                <br />
                <br />
                <input type="submit" value="Add Rental Item" />
            </fieldset>
          </form>
          
          <br />
          <table>
              <caption><b>Current Rental Items</b></caption>
              <thead>
                <tr>
                  <th>rental_ID</th>
                  <th>resource_ID</th>
                  <th>queue_numb</th>
                  <th>rental_item_status</th>
                  <th>return_date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>101</td>
                  <td>55</td>
                  <td>0</td>
                  <td>READY</td>
                  <td>2022-02-22</td>
                  <td>
                      <button>DELETE</button>
                  </td>
                  <td>
                      <button>UPDATE</button>
                  </td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>287</td>
                  <td>2</td>
                  <td>WAITING</td>
                  <td></td>
                  <td>
                      <button>DELETE</button>
                  </td>
                  <td>
                      <button>UPDATE</button>
                  </td>
                </tr>
              </tbody>
          </table>

        </main>
  
      </div>
    )
  }
  
  export default Rental_Items