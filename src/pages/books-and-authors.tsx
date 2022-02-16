import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Books_And_Authors: NextPage = () => {
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
                    Author ID: <select name="book_author_add">
                      <option value="1"> 1</option>
                      <option value="2"> 2</option>
                      <option value="3"> 3</option>
                      <option value="4"> 4</option>
                      <option value="5"> 5</option>
                    </select>
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
          <table>
              <caption><b>Books {"&"} Authors</b></caption>
              <thead>
                <tr>
                  <th>isbn</th>
                  <th>title</th>
                  <th>author_ID</th>
                  <th>author_name</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>978-0-123456-47-2</td>
                  <td>An Afternoon to Spanghew Frogs</td>
                  <td>1</td>
                  <td>Mister Moneybags</td>
                  <td>
                      <button>UPDATE</button>
                  </td>
                  <td>
                      <button>DELETE</button>
                  </td>
                </tr>
                <tr>
                  <td>978-0-654321-47-1</td>
                  <td>A Barrel Full of Monkeys</td>
                  <td>2</td>
                  <td>Ape Hangers</td>
                  <td>
                      <button>UPDATE</button>
                  </td>
                  <td>
                      <button>DELETE</button>
                  </td>
                </tr>
                <tr>
                  <td>978-1-178456-79-4</td>
                  <td>Protein {"&"} Fiber: A Poor Man{"'"}s Guide to DIY Colonoscopy</td>
                  <td>3</td>
                  <td>Doctor Doctor</td>
                  <td>
                      <button>UPDATE</button>
                  </td>
                  <td>
                      <button>DELETE</button>
                  </td>
                </tr>
                <tr>
                  <td>978-1-178456-79-4</td>
                  <td>Protein {"&"} Fiber: A Poor Man{"'"}s Guide to DIY Colonoscopy</td>
                  <td>4</td>
                  <td>Hugh Man</td>
                  <td>
                      <button>UPDATE</button>
                  </td>
                  <td>
                      <button>DELETE</button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>5</td>
                  <td>Joe Average</td>
                  <td>
                      <button>UPDATE</button>
                  </td>
                  <td>
                      <button>DELETE</button>
                  </td>
                </tr>
              </tbody>
          </table>

        </main>
  
      </div>
    )
  }
  
  export default Books_And_Authors