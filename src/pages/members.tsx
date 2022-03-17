import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormMembers from '@/components/form-members'
import FormMembersPost from '@/components/form-members-post'
import { useState, useEffect } from 'react'
import Table2 from '@/components/table-2'
import useData from '@/hooks/useData';
import UpdateFormMembers from '@/components/update-form-members'



const Members: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;

  const members_path_root = `${apiTld}/members`
  const [members_path, setMembersPath] = useState(members_path_root)
  const createUri: string = `${apiTld}/members`
  const updateUri: string = `${apiTld}/members`
  const deleteUri: string = `${apiTld}/members`

  //---------------
  // SEARCHING
  //----------------
  // make some controlled state for the search form
  const [search_form, setSearchForm] = useState({
    member_ID: "",
    member_first_name: "",
    member_last_name: "",
    member_phone: ""
  })

  // the Members table data
  const [members, setMembers] = useState([])
  
  const { data: memberData, 
    isLoading: membersIsLoading, 
    isError: membersIsError } = useData(members_path);

  // effect for filling in Members table
  useEffect( () => {
    setMembers(memberData);
  }, [memberData, membersIsLoading, membersIsError])


  //--------------
  // CREATE / POST
  //---------------
  // make some controlled state for the CREATE form
  const [create_form, setCreateForm] = useState({
    member_first_name: "",
    member_last_name: "",
    member_phone: ""
  })

  //--------------
  // UPDATE / PUT
  //---------------
  // controlled state for the UPDATE form
  const [update_form, setUpdateForm] = useState({
    member_ID: "",
    member_first_name: "",
    member_last_name: "",
    member_phone: ""
  })

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

        <FormMembers 
          locator={members_path_root}
          setPath={setMembersPath}
          stateStuff={[search_form, setSearchForm]}
        />
        <br />
        <FormMembersPost 
          stateStuff={[create_form, setCreateForm]}
          apiUri={createUri}
          affect={setMembers}
        />
        <br />
        <UpdateFormMembers 
            stateStuff={[update_form, setUpdateForm]}
            apiUri={updateUri}
            affect={setMembers}
        />
        <br />
        <Table2 
          data={members}
          update_form={setUpdateForm}
          isLoading={membersIsLoading}
          isError={membersIsError}
          caption={<b>Members</b>}
          affect={setMembers}
          deleteUri={deleteUri}
        />

      </main>

    </div>
  )
}
  
export default Members