import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Table2 from '@/components/table-2';
import { useState, useEffect } from 'react';
import FormAuthors from '@/components/form-authors'
import useData from '@/hooks/useData';


const Authors: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;
  const authorsUri: string = `${apiTld}/authors`

  // make some controlled state for the form
  const [authors_form, setAuthorsForm] = useState({
    author_name: "",
  })

  const [authors, setAuthors] = useState([]);

  const { data: authorsData, 
    isLoading: authorsIsLoading, 
    isError: authorsIsError } = useData(authorsUri);

  // effect for filling in Authors table
  useEffect( () => {
    setAuthors(authorsData);
  }, [authorsIsLoading, authorsData, authorsIsError])

    return (
      <div className={styles.container}>
        <Head>
          <title>Authors</title>
          <meta name="description" content="authors page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Authors</h1>
          <p>Welcome to the  Authors page</p>

          <br/>
          <FormAuthors 
            locator="authors" 
            stateStuff={[authors_form, setAuthorsForm]}
            apiUri={authorsUri}
            affect={setAuthors}
          />
          <br/>
          <Table2
            data={authors}
            isLoading={authorsIsLoading}
            isError={authorsIsError}
            caption={<b>Authors</b>}
          />
        </main>
      </div>
    )
  }
  
  export default Authors