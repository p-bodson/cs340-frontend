import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Table from '@/components/table'
import Dropdown from '@/components/dropdown'

const Books_And_Authors: NextPage = () => {
  const API_ENDPOINT = "yes";


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

          <form>
            <fieldset>
                <legend> Find Super Duper Books And Authors in the Network </legend>
                <p>Fill out zero or more of the fields below to find matching Books or Authors</p>
                <label>
                    Book ISBN: <input type="number" name="book_isbn"/>
                </label>
                <br/>
                <label>
                    Book Title: <input type="text" name="book_title" />
                </label>
                <br/>
                <label>
                    Author Name: <input type="address" name="author_name" />
                </label>
                <br />
                <br />
                <input type="submit" value="Search" />
            </fieldset>
            <br />
            <fieldset>
                <legend> Add a New Book </legend>
                <p>Fill out the form below with the information of the new Book</p>
                <label>
                    ISBN: <input type="text" name="book_isbn_add" required/>
                </label>
                <br/>
                <label>
                    Title: <input type="text" name="book_title_add" required/>
                </label>
                <br/>
                <label>
                    Author ID: {" "}
                    <Dropdown 
                      name="book_author_add"
                      locator="authors"
                      value_attribute="author_ID"
                    />
                      
                </label>
                <br/>
                <br />
                <input type="submit" value="Add Book" required/>
            </fieldset>
            <br />
            <fieldset>
                <legend> Add a New Author </legend>
                <p>Fill out the form below with the information of the new Author</p>
                <label>
                    Name: <input type="text" name="author_name_add" required/>
                </label>
                <br/>
                <br />
                <input type="submit" value="Add Author" required/>
            </fieldset>
          </form>
          <br/>
          <Table 
            locator="books-and-authors"
            caption={<b>Books {"&"} Authors</b>}
          />
          <Table 
            locator="books"
            caption={<b>Books</b>}
          />
          <Table 
            locator="authors"
            caption={<b>Authors</b>}
          />
        </main>
  
      </div>
    )
  }
  
  export default Books_And_Authors