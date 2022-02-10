import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Members: NextPage = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>CS340 Project</title>
          <meta name="description" content="project of OSU CS340 class" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Members</h1>
          <p>Welcome to the Members page</p>

          <form>
            <fieldset>
                <legend> Find Super Duper Library Network Members </legend>
                <br/>
                <label>
                    Member ID: <input type="number" name="member_ID"/>
                </label>
                <br/>
                <label>
                    Member First Name: <input type="text" name="member_first_name" />
                </label>
                <br/>
                <label>
                    Member Last Name: <input type="text" name="member_last_name" />
                </label>
                <br/>
                <label>
                    Member Phone Number: <input type="number" name="member_phone" />
                </label>
                <br />
                <br />
                <input type="submit" value="Submit" />
            </fieldset>
          </form>
          

        </main>
  
        <footer className={styles.footer}>
         Created by Kevin Peralta and Liam Gombart
        </footer>
      </div>
    )
  }
  
  export default Members