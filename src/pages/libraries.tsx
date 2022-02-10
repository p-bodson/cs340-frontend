import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Libraries: NextPage = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>Libraries</title>
          <meta name="description" content="libraries page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Libraries</h1>
          <p>Welcome to the Libraries page</p>

          <form>
            <fieldset>
                <legend> Find Super Duper Libraries in the Network </legend>
                <p>Fill out zero or more of the fields below to find matching libraries</p>
                <label>
                    Library ID: <input type="number" name="library_ID"/>
                </label>
                <br/>
                <label>
                    Library Name: <input type="text" name="library_name" />
                </label>
                <br/>
                <label>
                    Library Address: <input type="address" name="library_address" />
                </label>
                <br />
                <br />
                <input type="submit" value="Search" />
            </fieldset>
            <br />
            <fieldset>
                <legend> Add a New Library </legend>
                <p>Fill out the form below with the information of the new library</p>
                <label>
                    Name: <input type="text" name="library_name" required/>
                </label>
                <br/>
                <label>
                    Address: <input type="text" name="address" required/>
                </label>
                <br/>
                <br />
                <input type="submit" value="Add Library" required/>
            </fieldset>
          </form>

        </main>
  
        <footer className={styles.footer}>
         Created by Kevin Peralta and Liam Gombart
        </footer>
      </div>
    )
  }
  
  export default Libraries