import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Table from '@/components/table'
import Table2 from '@/components/table-2'
import { useState} from 'react';
import FormAuthors from '@/components/form-authors'
import FormBooks from '@/components/form-books'
import FormBooksAndAuthors from '@/components/form-books-and-authors'


const Books_And_Authors: NextPage = () => {

  const books_and_authors_path_root = "books-and-authors"  
  const [books_and_authors_path, setBaaPath] = useState(books_and_authors_path_root)

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
          />
          <br/>
          <Table2 
            locator={books_and_authors_path}
            caption={<b>Books {"&"} Authors</b>}
          />
          <br />
          <FormBooks locator="books"/>
          <br />
          <Table2 
            locator="books"
            caption={<b>Books</b>}
          />
          <br/>
          <FormAuthors 
            locator="authors"
            />
          <br/>
          <Table2 
            locator="authors"
            caption={<b>Authors</b>}
          />
        </main>
  
      </div>
    )
  }
  
  export default Books_And_Authors