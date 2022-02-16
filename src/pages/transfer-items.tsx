import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Transfer_Items: NextPage = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>Transfer Items</title>
          <meta name="description" content="Transfer Items page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Transfer Items</h1>
          <p>This is the Transfer Items page for Transfer with transfer_ID 202</p>

          <form>
            <fieldset>
                <legend> Add a Transfer Item </legend>
                <p>Provide the resource ID and quantity of the transfer item to add</p>
                <label>
                    Resource ID: <input type="number" name="resource_ID" />
                </label>
                <br />
                <label>
                    Quantity: <input type="number" name="quantity" />
                </label>
                <br />
                <br />
                <input type="submit" value="Add Transfer Item" />
            </fieldset>
          </form>
          <br />
          <table>
              <caption><b>Selected Transfer</b></caption>
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
                  <td>202</td>
                  <td>1</td>
                  <td>3</td>
                  <td>2022-02-10</td>
                </tr>
              </tbody>
          </table>
          <br />
          <table>
              <caption><b>Transfer Items for Selected Transfer</b></caption>
              <thead>
                <tr>
                  <th>transfer_ID</th>
                  <th>resource_ID</th>
                  <th>quantity</th>
                  <th>transfer_item_status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>202</td>
                  <td>55</td>
                  <td>1</td>
                  <td>COMPLETE</td>
                  <td>
                      <button>DELETE</button>
                  </td>
                  <td>
                      <button>UPDATE</button>
                  </td>
                </tr>
                <tr>
                  <td>202</td>
                  <td>287</td>
                  <td>2</td>
                  <td>IN PROGRESS</td>
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
  
  export default Transfer_Items