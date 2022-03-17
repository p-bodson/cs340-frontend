import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormAuthors from '@/components/form-authors'
import FormAuthorsPost from '@/components/form-authors-post'
import { useState, useEffect } from 'react'
import Table2 from '@/components/table-2'
import useData from '@/hooks/useData';
import UpdateFormAuthors from '@/components/update-form-authors'


const Authors: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;

  const authors_path_root = `${apiTld}/authors`
  const [authors_path, setAuthorsPath] = useState(authors_path_root)
  const createUri: string = `${apiTld}/authors`
  const updateUri: string = `${apiTld}/authors`
  const deleteUri: string = `${apiTld}/authors`

  //---------------
  // SEARCHING
  //----------------
  // make some controlled state for the search form
  const [search_form, setSearchForm] = useState({
    author_ID: "",
    author_name: ""
  })

  // the Authors table data
  const [authors, setAuthors] = useState([])
  
  const { data: authorData, 
    isLoading: authorsIsLoading, 
    isError: authorsIsError } = useData(authors_path);

  // effect for filling in Authors table
  useEffect( () => {
    setAuthors(authorData);
  }, [authorData, authorsIsLoading, authorsIsError])


  //--------------
  // CREATE / POST
  //---------------
  // make some controlled state for the CREATE form
  const [create_form, setCreateForm] = useState({
    author_name: ""
  })

  //--------------
  // UPDATE / PUT
  //---------------
  // controlled state for the UPDATE form
  const [update_form, setUpdateForm] = useState({
    author_ID: "",
    author_name: ""
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Authors</title>
        <meta name="description" content="authors page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>Authors</h1>
        <p>Welcome to the Authors page</p>

        <FormAuthors 
          locator={authors_path_root}
          setPath={setAuthorsPath}
          stateStuff={[search_form, setSearchForm]}
        />
        <br />
        <FormAuthorsPost 
          stateStuff={[create_form, setCreateForm]}
          apiUri={createUri}
          affect={setAuthors}
        />
        <br />
        <UpdateFormAuthors 
            stateStuff={[update_form, setUpdateForm]}
            apiUri={updateUri}
            affect={setAuthors}
        />
        <br />
        <Table2 
          data={authors}
          update_form={setUpdateForm}
          isLoading={authorsIsLoading}
          isError={authorsIsError}
          caption={<b>Authors</b>}
          affect={setAuthors}
          deleteUri={deleteUri}
        />

      </main>

    </div>
  )
}
  
export default Authors