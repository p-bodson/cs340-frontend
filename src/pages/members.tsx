import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormMembers from '@/components/form-members'
import FormMembersPost from '@/components/form-members-post'
import { useState } from 'react'
import Table from '@/components/table'

const Members: NextPage = () => {

  const members_path_root = "members"
  const [members_path, setMembersPath] = useState(members_path_root)
  
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
          />
          <br />
          <FormMembersPost locator="members"/>
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