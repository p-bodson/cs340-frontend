import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Table from '@/components/table'
import { useSubmit } from '@/hooks/useSubmit'
import { useChange } from '@/hooks/useChange'
import { useState, useEffect } from 'react';

const Members: NextPage = () => {


  // make some controlled state for the forms
  const [searchForm, setSearchForm] = useState({
    member_ID: "",
    member_first_name: "",
    member_last_name: "",
    member_phone: ""
  })
  const onChangeSearchForm = useChange(searchForm, setSearchForm);
  // for onChange to work, the names of each input
  // element in the forms must be unique and match
  // the names of the values in the form state

  const members_path_root = "members"
  const [members_path, setMembersPath] = useState(members_path_root)


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
    "path_root": members_path_root, 
    "setter": setMembersPath
  });

  const handleSecond = useSubmit("", () => {console.log("no")}, {});
  const handleThird = useSubmit("", () => {console.log("maybe")}, {});
  
    return (
      <div className={styles.container}>
        <Head>
          <title>Members</title>
          <meta name="description" content="members page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Members</h1>
          <p>Welcome to the Members page</p>

          <form onSubmit={handleSearch}>
            <fieldset>
                <legend> Find Super Duper Library Network Members </legend>
                <p>Fill out zero or more of the fields below to find matching members</p>
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
                    Member First Name: <input
                    type="text" 
                    name="member_first_name" 
                    value={searchForm.member_first_name}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Member Last Name: <input 
                    type="text" 
                    name="member_last_name" 
                    value={searchForm.member_last_name}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Member Phone Number: <input 
                    type="number" 
                    name="member_phone" 
                    value={searchForm.member_phone}
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
                <legend> Add a New Member </legend>
                <p>Fill out the form below with the information of the new member</p>
                <label>
                    First Name: <input type="text" name="member_first_name_add" required/>
                </label>
                <br/>
                <label>
                    Last Name: <input type="text" name="member_last_name_add" required/>
                </label>
                <br/>
                <label>
                    Phone Number: <input type="number" name="member_phone_add" required/>
                </label>
                <br />
                <br />
                <input type="submit" value="Add Member" required/>
            </fieldset>
          </form>
          <br />
          <Table 
            locator={members_path}
            caption={<b>Members</b>}
          />

        </main>
  
      </div>
    )
  }
  
  export default Members