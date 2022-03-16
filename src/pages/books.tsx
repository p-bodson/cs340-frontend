import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Table2 from '@/components/table-2';
import { useState, useEffect } from 'react';
import FormBooks from '@/components/form-books'
import useData from '@/hooks/useData';


const Books: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;
  const booksUri: string = `${apiTld}/books`

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
  }, [booksIsLoading, booksData, booksIsError])

    return (
      <div className={styles.container}>
        <Head>
          <title>Books</title>
          <meta name="description" content="books page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Books</h1>
          <p>Welcome to the Books page</p>

          <br />
          <FormBooks 
            locator="books" 
            stateStuff={[books_form, setBooksForm]} 
            apiUri={booksUri}
            affect={setBooks}
          />
          <br />
          <Table2 
            data={books}
            isLoading={booksIsLoading}
            isError={booksIsError}
            caption={<b>Books</b>}
          />
        </main>
      </div>
    )
  }
  
  export default Books