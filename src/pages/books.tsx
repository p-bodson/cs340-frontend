import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Table2 from '@/components/table-2';
import { useState, useEffect } from 'react';
import FormBooks from '@/components/form-books-post'
import useData from '@/hooks/useData';
import UpdateFormBooks from '@/components/update-form-books'



const Books: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;
  const createUri: string = `${apiTld}/books`
  const updateUri: string = `${apiTld}/books`

  // make some controlled state for the CREATE form
  const [create_form, setCreateForm] = useState({
    book_title: ""
  })

  // controlled state for the UPDATE form
  const [update_form, setUpdateForm] = useState( {
    isbn:"",
    book_title: ""
  })

  // state for books displayed in table
  const [books, setBooks] = useState([]);

  const { data: booksData, 
    isLoading: booksIsLoading, 
    isError: booksIsError } = useData(createUri);

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
            stateStuff={[create_form, setCreateForm]} 
            apiUri={createUri}
            affect={setBooks}
          />
          <br/>
          <UpdateFormBooks 
            stateStuff={[update_form, setUpdateForm]}
            apiUri={updateUri}
            affect={setBooks}
          />
          <br />
          <Table2 
            data={books}
            update_form={setUpdateForm}
            isLoading={booksIsLoading}
            isError={booksIsError}
            caption={<b>Books</b>}
          />
        </main>
      </div>
    )
  }
  
  export default Books