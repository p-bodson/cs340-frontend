import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Table from '@/components/table'
import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState, useEffect } from 'react';


const Rentals: NextPage = () => {
    

  // make some controlled state for the forms
  const [searchForm, setSearchForm] = useState({
    rental_ID: "",
    member_ID: "",
    library_ID: "",
    rental_date: ""
  })
  const onChangeSearchForm = useChange(searchForm, setSearchForm);
  // for onChange to work, the names of each input
  // element in the forms must be unique and match
  // the names of the values in the form state

  const rentals_path_root = "rentals"
  const [rentals_path, setRentalsPath] = useState(rentals_path_root)


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
    "data": searchForm, 
    "path_root": rentals_path_root, 
    "setter": setRentalsPath
  });

  const handleSecond = useSubmit("", () => {console.log("no")}, {});
  const handleThird = useSubmit("", () => {console.log("maybe")}, {});

  return (
      <div className={styles.container}>
        <Head>
          <title>Rentals</title>
          <meta name="description" content="Rentals page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Rentals</h1>
          <p>Welcome to the Rentals page</p>

          <form onSubmit={handleSearch}>
            <fieldset>
                <legend> Find Rental Orders in the Super Duper Library Network </legend>
                <p>Fill out zero or more of the fields below to find matching rentals</p>
                <label>
                    Rental ID: <input 
                    type="number" 
                    name="rental_ID"
                    value={searchForm.rental_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Member ID: <input 
                    type="number" 
                    name="member_ID"
                    value={searchForm.member_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Library ID: <input 
                    type="number" 
                    name="library_ID"
                    value={searchForm.library_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Rental Date: <input 
                    type="date" 
                    name="rental_date"
                    value={searchForm.rental_date}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <br />
                <input type="submit" value="Search" />
            </fieldset>
            <br />
          </form>
          <form>
            <fieldset>
                <legend> Add a Rental Order </legend>
                <p>Fill out the form below with the information of the new member</p>
                <label>
                    Member ID: <input type="number" name="member_ID" />
                </label>
                <br/>
                <label>
                    Library ID: {' '}
                    <select name="library_ID">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </label>
                <br/>
                <label>
                    Rental Date: <input type="date" name="rental_date" />
                </label>
                <br />
                <br />
                <input type="submit" value="Add Rental" />
            </fieldset>
          </form>
          <br />
          <Table 
            locator={rentals_path}
            caption={<b>Rentals</b>}
          />
          <ul>
            <li>Clicking on a rental_ID above redirects to that rental{"'"}s rental_items page</li>
            <li>Clicking DELETE button deletes that rental along with its associated rental_items</li>
          </ul>
        </main>
      </div>
    )
  }
  
  export default Rentals