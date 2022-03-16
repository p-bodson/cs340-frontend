import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Table2 from '@/components/table-2';
import { useState, useEffect } from 'react';
import FormAuthors from '@/components/form-authors'
import FormBooks from '@/components/form-books'
import FormBooksAndAuthors from '@/components/form-books-and-authors'

import useData from '@/hooks/useData';


const Books_And_Authors: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;

  const books_and_authors_path_root = `${apiTld}/books-and-authors` 
  const [books_and_authors_path, setBaaPath] = useState(books_and_authors_path_root)

  
  const authorsUri: string = `${apiTld}/authors`
  const booksUri: string = `${apiTld}/books`

  const [trigger, setTrigger] = useState(false);

  

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
  const [books_and_authors, setBaa] = useState({
    isbn: "",
    book_title: ""
  })
  const { data: baaData, 
    isLoading: baaIsLoading, 
    isError: baaIsError } = useData(books_and_authors_path);

  // effect for filling in Books_Authors table
  useEffect( () => {
    setBaa(baaData);
  }, [books_and_authors, baaIsLoading, baaData, baaIsError, trigger])


  // -----------------------
  // Books
  // -----------------------
  // make some controlled state for the form
  const [books_form, setBooksForm] = useState({
    isbn: "",
    book_title: ""
  })
  const [books, setBooks] = useState([]);
  const { data: booksData, 
    isLoading: booksIsLoading, 
    isError: booksIsError } = useData(booksUri);

  // effect for filling in Books table
  useEffect( () => {
    setBooks(booksData);
  }, [books, booksIsLoading, booksData, booksIsError, trigger])


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
  }, [authors, authorsIsLoading, authorsData, authorsIsError, trigger])

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
            data={books_and_authors}
            isLoading={baaIsLoading}
            isError={baaIsError}
            caption={<b>Books {"&"} Authors</b>}
          />
          <br />
          <FormBooks 
            locator="books" 
            stateStuff={[books_form, setBooksForm]} 
            apiUri={booksUri}
          />
          <br />
          <Table2 
            data={books}
            isLoading={booksIsLoading}
            isError={booksIsError}
            caption={<b>Books</b>}
          />
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
  
  export default Books_And_Authors