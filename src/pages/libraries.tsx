import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Table from '@/components/table'
import { useSubmit } from '@/hooks/useSubmit'
import { useChange } from '@/hooks/useChange'
import { useState, useEffect } from 'react';

const Libraries: NextPage = () => {


    // make some controlled state for the forms
    const [searchForm, setSearchForm] = useState({
      library_ID: "",
      library_name: "",
      library_address: ""
    })
    const onChangeSearchForm = useChange(searchForm, setSearchForm);
    // for onChange to work, the names of each input
    // element in the forms must be unique and match
    // the names of the values in the form state
  
    const libraries_path_root = "libraries"
    const [libraries_path, setLibrariesPath] = useState(libraries_path_root)
  
  
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
      "path_root": libraries_path_root, 
      "setter": setLibrariesPath
    });
  
    const handleSecond = useSubmit("", () => {console.log("no")}, {});
    const handleThird = useSubmit("", () => {console.log("maybe")}, {});

    return (
      <div className={styles.container}>
        <Head>
          <title>Libraries</title>
          <meta name="description" content="libraries page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Libraries</h1>
          <p>Welcome to the Libraries page</p>

          <form onSubmit={handleSearch}>
            <fieldset>
                <legend> Find Super Duper Libraries in the Network </legend>
                <p>Fill out zero or more of the fields below to find matching libraries</p>
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
                    Library Name: <input 
                    type="text" 
                    name="library_name"
                    value={searchForm.library_name}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Library Address: <input 
                    type="text" 
                    name="library_address"
                    value={searchForm.library_address}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br />
                <br />
                <input type="submit" value="Search" />
            </fieldset>
          </form>
          <br />
          <form>
            <fieldset>
                <legend> Add a New Library </legend>
                <p>Fill out the form below with the information of the new library</p>
                <label>
                    Name: <input type="text" name="library_name" required/>
                </label>
                <br/>
                <label>
                    Address: <input type="text" name="address" required/>
                </label>
                <br/>
                <br />
                <input type="submit" value="Add Library" required/>
            </fieldset>
          </form>
          <br />
          <Table 
            locator={libraries_path}
            caption={<b>Libraries</b>}
          />
        </main>
      </div>
    )
  }
  
  export default Libraries