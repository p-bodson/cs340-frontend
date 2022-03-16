import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Table2 from '@/components/table-2';
import { useState, useEffect } from 'react';
import FormAuthors from '@/components/form-authors'
import useData from '@/hooks/useData';
import UpdateFormAuthors from '@/components/update-form-authors'


const Authors: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;
  const authorsUri: string = `${apiTld}/authors`
  const updateUri: string = `${apiTld}/authors`

  // make some controlled state for the CREATE form
  const [authors_form, setAuthorsForm] = useState({
    author_name: "",
  })

  // controlled state for the UPDATE form
  const [update_form, setUpdateForm] = useState( {
    author_ID: "",
    author_name: ""
  })

  // state for the authors displayed in a table
  const [authors, setAuthors] = useState([]);

  // used to initially fill in the table
  const { data: authorsData, 
    isLoading: authorsIsLoading, 
    isError: authorsIsError } = useData(authorsUri);
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
            stateStuff={[authors_form, setAuthorsForm]}
            apiUri={authorsUri}
            affect={setAuthors}
          />
          <br/>
          <br/>
          <UpdateFormAuthors 
            stateStuff={[update_form, setUpdateForm]}
            apiUri={updateUri}
            affect={setAuthors}
          />
          <br/>
          <Table2
            data={authors}
            update_form={setUpdateForm}
            isLoading={authorsIsLoading}
            isError={authorsIsError}
            caption={<b>Authors</b>}
          />
        </main>
      </div>
    )
  }
  
  export default Authors