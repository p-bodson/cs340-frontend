import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Table2 from '@/components/table-2';
import { useState, useEffect } from 'react';
import FormBooksAndAuthors from '@/components/form-books-and-authors'
import FormBooksAndAuthorsPost from '@/components/form-books-and-authors-post'
import UpdateFormBooksAndAuthors from '@/components/update-form-books-and-authors';
import useData from '@/hooks/useData';
import useGet from '@/hooks/useGet';


const Books_And_Authors: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;

  const books_and_authors_path_root = `${apiTld}/books-and-authors` 
  const [books_and_authors_path, setBaaPath] = useState(books_and_authors_path_root)

  const apiUri = {
    createUri: `${apiTld}/books-and-authors`,
    deleteUri: `${apiTld}/books-and-authors`,
    authorsUri: `${apiTld}/authors`,
    booksUri: `${apiTld}/books`
  }

  // -----------------------
  // Books & Authors
  // -----------------------
  // make some controlled state for the search form
  const [search_form, setSearchForm] = useState({
    isbn: "",
    book_title: "",
    author_name: "",
    author_ID: ""
  })

  // the Books_Authors table data
  const [books_and_authors, setBaa] = useState([])

  const { data: baaData, 
    isLoading: baaIsLoading, 
    isError: baaIsError } = useData(books_and_authors_path);

  // effect for filling in Books_Authors table
  useEffect( () => {
    setBaa(baaData);
  }, [baaIsLoading, baaData, baaIsError])


  ////////////////////////
  // CREATE form setup
  // --------------

  // make some controlled state for the CREATE form
  const [create_form, setCreateForm] = useState({
    isbn: "",
    author_ID: ""
  })

  // create state for any FK dropdowns
  // Authors
  const [authorsDD, setAuthorsDD] = useState([])
  // Books
  const [booksDD, setBooksDD] = useState([])

  // CREATE form defaults
  const [createDefaults, setCreateDefaults] = useState({
      isbn: "",
      author_ID: ""
  })

  const sendGet = useGet()

  const setupCreateForm = async () => {
    // get the dropdown data
    let booksData = await sendGet({
      "url": apiUri.booksUri
    });
    let authorsData = await sendGet({
      "url": apiUri.authorsUri
    });

    setBooksDD(booksData);
    setAuthorsDD(authorsData);

    // get the default value as the 
    // first element found
    // no error handling present
    const isbn_default = booksData[0]["isbn"];
    const author_ID_default = authorsData[0]["author_ID"];

    setCreateDefaults({
      isbn: isbn_default,
      author_ID: author_ID_default
    })
  }

  useEffect( () => {
    setupCreateForm()
  }, [] )

  // -----------------------
  // END Create form setup
  /////////////////////////
  

    return (
      <div className={styles.container}>
        <Head>
          <title>Books And Authors</title>
          <meta name="description" content="libraries page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Books And Authors</h1>
          <p>Welcome to the Books And Authors page</p>

          <FormBooksAndAuthors 
            locator={books_and_authors_path_root}
            setPath={setBaaPath}
            stateStuff = {[search_form, setSearchForm]}
          />
          <br/>
          <FormBooksAndAuthorsPost 
            stateStuff={[create_form, setCreateForm]} 
            apiUri={apiUri.createUri}
            affect={setBaa}
            authorsDD={authorsDD}
            booksDD={booksDD}
            default_state={createDefaults}
          />
          <br/>
          <UpdateFormBooksAndAuthors/>
          <br/>
          <Table2 
            data={books_and_authors}
            isLoading={baaIsLoading}
            isError={baaIsError}
            caption={<b>Books {"&"} Authors</b>}
            affect={setBaa}
            deleteUri={apiUri.deleteUri}
          />
        </main>
      </div>
    )
  }
  
  export default Books_And_Authors