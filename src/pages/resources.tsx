import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Resources: NextPage = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>Resources</title>
          <meta name="description" content="resources page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Resources</h1>
          <p>Welcome to the Resources page</p>

          <form>
            <fieldset>
                <legend> Find Super Duper Resources in the Network </legend>
                <p>Fill out zero or more of the fields below to find matching resources</p>
                <label>
                    Resource ID: <input type="number" name="search_resource_ID"/>
                </label>
                <br/>
                <label>
                    Resource ISBN: <input type="text" name="search_resource_isbn" />
                </label>
                <br/>
                <label>
                    Resource Title: <input type="text" name="search_resource_title" />
                </label>
                <br/>
                <label>
                    Resource Location: <input type="text" name="search_resource_location" />
                </label>
                <br />
                <label>
                    Quantity Available: <input type="number" name="search_resource_available" />
                </label>
                <br />
                <label>
                    Quantity Checked Out: <input type="number" name="search_resource_checked_out" />
                </label>                
                <br />
                <br />
                <input type="submit" value="Search" />
            </fieldset>
            <br />
            <fieldset>
                <legend> Add a New Resource </legend>
                <p>Fill out the form below with the information of the new resource</p>
                <label>
                    ISBN: <input type="text" name="add_resource_isbn" required/>
                </label>
                <br/>
                <label>
                    Resource Location: <select name="add_resource_location">
                      <option value="1"> Library 1</option>
                      <option value="2"> Library 2</option>
                      <option value="3"> Library 3</option>
                    </select>
                </label>
                <br/>
                <label>
                    Quantity Total: <input type="number" name="add_resource_total" required/>
                </label>
                <br/>
                <br />
                <input type="submit" value="Add Resource" required/>
            </fieldset>
          </form>

        </main>
  
        <footer className={styles.footer}>
         Created by Kevin Peralta and Liam Gombart
        </footer>
      </div>
    )
  }
  
  export default Resources