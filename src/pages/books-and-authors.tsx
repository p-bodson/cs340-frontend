import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Table from '@/components/table'
import Table2 from '@/components/table-2';
import { useState, useEffect } from 'react';
import FormAuthors from '@/components/form-authors'
import FormBooks from '@/components/form-books'
import FormBooksAndAuthors from '@/components/form-books-and-authors'

import useData from '@/hooks/useData';


const Books_And_Authors: NextPage = () => {

  const [trigger, setTrigger] = useState(false);

  const books_and_authors_path_root = "books-and-authors"  
  const [books_and_authors_path, setBaaPath] = useState(books_and_authors_path_root)

  const apiTld = process.env.NEXT_PUBLIC_API_TLD;
  const authorsUri: string = `${apiTld}/authors`

  // make some controlled state for the search form
  const [search_form, setSearchForm] = useState({
    isbn: "",
    book_title: "",
    author_name: "",
    author_ID: ""
  })

  // make some controlled state for the form
  const [books_form, setBooksForm] = useState({
    isbn: "",
    book_title: ""
  })


  // -----------------------
  // Authors
  // -----------------------
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
    console.log(authors);
  }, [authors, authorsIsLoading, authorsData, trigger])

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
          <Table2 
            locator={books_and_authors_path}
            caption={<b>Books {"&"} Authors</b>}
          />
          <br />
          <FormBooks locator="books" stateStuff={[books_form, setBooksForm]} />
          <br />
          <Table2 
            locator="books"
            caption={<b>Books</b>}
          />
          <br/>
          <FormAuthors 
            locator="authors" 
            stateStuff={[authors_form, setAuthorsForm]}
            affectedData={trigger}
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
  
  export default Books_And_Authors