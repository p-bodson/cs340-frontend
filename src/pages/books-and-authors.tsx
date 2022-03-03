import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Table from '@/components/table'
import Dropdown from '@/components/dropdown'
import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState } from 'react';

import FormAuthor from '@/components/form-author'

const Books_And_Authors: NextPage = () => {
  

  // make some controlled state for the search form
  const [search_form, setSearchForm] = useState({
    book_isbn: "",
    book_title: "",
    author_name: "",
    author_ID: ""
  })
  const onChangeSearchForm = useChange(search_form, setSearchForm);
  // for onChange to work, the names of each input
  // element in the forms must be unique and match
  // the names of the values in the form state

  const books_and_authors_path_root = "books-and-authors"
  const [books_and_authors_path, setBaaPath] = useState(books_and_authors_path_root)

  // make some submission handlers for the different forms
  const sendSearch = (args: any) => {   
    let path = `${args.path_root}?`   
    for (const key in args.data) {
      if (`${args.data[key]}` !== "") {
        path += `${key}=${encodeURIComponent(args.data[key])}&`;
      }   
    }
    args.setter(path);
  };
  const handleSearch = useSubmit("", sendSearch, {
    "data": search_form, 
    "path_root": books_and_authors_path_root, 
    "setter": setBaaPath
  });

  // now create the assets for adding a book.

  const handleSecond = useSubmit("", () => {console.log("no")}, {});

  // now create the assets for adding an author


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

          <form onSubmit={handleSearch}>
            <fieldset>
                <legend> Find Super Duper Books And Authors in the Network </legend>
                <p>Fill out zero or more of the fields below to find matching Books or Authors</p>
                <label>
                    Book ISBN: <input 
                      type="text" 
                      name="book_isbn"
                      value={search_form.book_isbn}
                      onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Book Title: <input 
                      type="text"
                      name="book_title" 
                      value={search_form.book_title}
                      onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Author Name: <input
                      type="text"
                      name="author_name"
                      value={search_form.author_name}
                      onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Author ID: <input
                      type="text"
                      name="author_ID"
                      value={search_form.author_ID}
                      onChange={onChangeSearchForm}
                    />
                </label>
                <br />
                <br />
                <input type="submit" value="Search" />
            </fieldset>
          </form>

            <br />

          <form onSubmit={handleSecond}>
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
          </form>

            <br />
            
          <FormAuthor locator="authors" />

          <br/>

          <Table 
            locator={books_and_authors_path}
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