import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Table from '@/components/table'
import { useSubmit } from '@/hooks/useSubmit'
import { useChange } from '@/hooks/useChange'
import { useState, useEffect } from 'react';

const Transfers: NextPage = () => {


  // make some controlled state for the forms
  const [searchForm, setSearchForm] = useState({
    transfer_ID: "",
    source_library_ID: "",
    destination_library_ID: "",
    transfer_date: ""
  })
  const onChangeSearchForm = useChange(searchForm, setSearchForm);
  // for onChange to work, the names of each input
  // element in the forms must be unique and match
  // the names of the values in the form state

  const transfers_path_root = "transfers"
  const [transfers_path, setTransfersPath] = useState(transfers_path_root)


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
    "path_root": transfers_path_root, 
    "setter": setTransfersPath
  });

  const handleSecond = useSubmit("", () => {console.log("no")}, {});
  const handleThird = useSubmit("", () => {console.log("maybe")}, {});
  

    return (
      <div className={styles.container}>
        <Head>
          <title>Transfers</title>
          <meta name="description" content="Transfers page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Transfers</h1>
          <p>Welcome to the Transfers page</p>

          <form onSubmit={handleSearch}>
            <fieldset>
                <legend> Find Transfer Orders in the Super Duper Library Network </legend>
                <p>Fill out zero or more of the fields below to find matching transfers</p>
                <label>
                    Transfer ID: <input 
                    type="number" 
                    name="transfer_ID"
                    value={searchForm.transfer_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Source Library ID: <input 
                    type="number" 
                    name="source_library_ID" 
                    value={searchForm.source_library_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Destination Library ID: <input 
                    type="number" 
                    name="destination_library_ID" 
                    value={searchForm.destination_library_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Transfer Date: <input 
                    type="date" 
                    name="transfer_date" 
                    value={searchForm.transfer_date}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br />
                <br />
                <input type="submit" value="Search" />
            </fieldset>
          <br />
          </form>
          <form>
            <fieldset>
                <legend> Add a Transfer Order </legend>
                <p>Fill out the form below with the information of the new transfer</p>
                <label>
                    Source Library ID: {' '}
                    <select name="source_library_ID">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </label>
                <br/>
                <label>
                    Destination Library ID: {' '}
                    <select name="destination_library_ID">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </label>
                <br/>
                <label>
                    Transfer Date: <input type="date" name="transfer_date" />
                </label>
                <br />
                <br />
                <input type="submit" value="Add Transfer" />
            </fieldset>
          </form>
          <br />
          <Table 
            locator={transfers_path}
            caption={<b>Transfers</b>}
          />
          <ul>
            <li>Clicking on a transfer_ID above redirects to that transfer{"'"}s transfer_items page</li>
            <li>Clicking DELETE button deletes that transfer along with its associated transfer_items</li>
          </ul>
        </main>
      </div>
    )
  }
  
  export default Transfers