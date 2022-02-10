import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'


const Rentals: NextPage = () => {
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

          <form>

            <fieldset>
                <legend> Find Rental Orders in the Super Duper Library Network </legend>
                <p>Fill out zero or more of the fields below to find matching rentals</p>
                <label>
                    Rental ID: <input type="number" name="rental_ID"/>
                </label>
                <br/>
                <label>
                    Member ID: <input type="number" name="member_ID" />
                </label>
                <br/>
                <label>
                    Library ID: <input type="number" name="library_ID" />
                </label>
                <br/>
                <label>
                    Rental Date: <input type="date" name="rental_date" />
                </label>
                <br/>
                <br />
                <input type="submit" value="Search" />
            </fieldset>
            <br />

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

          <table>
              <caption><b>Search Results</b></caption>
              <thead>
                <tr>
                  <th>rental_ID</th>
                  <th>member_ID</th>
                  <th>library_ID</th>
                  <th>rental_date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <Link href="/rental-items">
                    <a style={{color: "blue" }} >101</a>
                    </Link>
                  </td>
                  <td>3</td>
                  <td>2</td>
                  <td>2022-02-10</td>
                  <td>
                      <button>DELETE</button>
                  </td>
                </tr>
              </tbody>
          </table>
          <p>Click on a rental_ID above to be taken to that rental{"'"} rental_items page</p>

        </main>
  
        <footer className={styles.footer}>
         Created by Kevin Peralta and Liam Gombart
        </footer>
      </div>
    )
  }
  
  export default Rentals