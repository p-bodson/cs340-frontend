import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormLibraries from '@/components/form-libraries'
import { useState } from 'react'
import Table from '@/components/table'

const Libraries: NextPage = () => {
  
    const libraries_path_root = "libraries"
    const [libraries_path, setLibrariesPath] = useState(libraries_path_root)

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

          <FormLibraries
            locator={libraries_path_root}
            setPath={setLibrariesPath}
          />
          <br />
          <form>
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
          <br />
          <Table 
            locator={libraries_path}
            caption={<b>Libraries</b>}
          />
        </main>
      </div>
    )
  }
  
  export default Libraries