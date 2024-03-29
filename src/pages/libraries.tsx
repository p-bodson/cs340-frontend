import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormLibraries from '@/components/form-libraries'
import FormLibrariesPost from '@/components/form-libraries-post'
import { useState, useEffect } from 'react'
import Table2 from '@/components/table-2'
import useData from '@/hooks/useData';
import UpdateFormLibraries from '@/components/update-form-libraries'


const Libraries: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;
  
  const libraries_path_root = `${apiTld}/libraries`
  const [libraries_path, setLibrariesPath] = useState(libraries_path_root)
  const createUri: string = `${apiTld}/libraries`
  const updateUri: string = `${apiTld}/libraries`
  const deleteUri: string = `${apiTld}/libraries`

  //---------------
  // SEARCHING
  //----------------
  // make some controlled state for the search form
  const [search_form, setSearchForm] = useState({
    library_ID: "",
    library_name: "",
    library_address: ""
  })

  // the Libraries table data
  const [libraries, setLibraries] = useState([])
  
  const { data: librariesData, 
    isLoading: librariesIsLoading, 
    isError: librariesIsError } = useData(libraries_path);

  // effect for filling in Libraries table
  useEffect( () => {
    setLibraries(librariesData);
  }, [librariesData, librariesIsLoading, librariesIsError])

  //--------------
  // CREATE / POST
  //---------------
  // make some controlled state for the CREATE form
  const [create_form, setCreateForm] = useState({
    library_name: "",
    library_address: ""
  })

  //--------------
  // UPDATE / PUT
  //---------------
  // controlled state for the UPDATE form
  const [update_form, setUpdateForm] = useState({
    library_ID: "",
    library_name: "",
    library_address: ""
  })

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

        <FormLibraries
          locator={libraries_path_root}
          setPath={setLibrariesPath}
          stateStuff={[search_form, setSearchForm]}
        />
        <br />
        <FormLibrariesPost 
          stateStuff={[create_form, setCreateForm]}
          apiUri={createUri}
          affect={setLibraries}/>
        <br />
        <UpdateFormLibraries 
            stateStuff={[update_form, setUpdateForm]}
            apiUri={updateUri}
            affect={setLibraries}
        />
        <br />
        <Table2 
          data={libraries}
          update_form={setUpdateForm}
          isLoading={librariesIsLoading}
          isError={librariesIsError}
          caption={<b>Libraries</b>}
          affect={setLibraries}
          deleteUri={deleteUri}
        />
      </main>
    </div>
  )
}
  
export default Libraries