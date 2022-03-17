import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormResources from '@/components/form-resources'
import { useState, useEffect } from 'react'
import Table2 from '@/components/table-2'
import useData from '@/hooks/useData';
import FormResourcesPost from '@/components/form-resources-post'
import UpdateFormResources from '@/components/update-form-resources'
import useGet from "@/hooks/useGet"

const Resources: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;

  const resources_path_root = `${apiTld}/resources`  
  const [resources_path, setResourcePath] = useState(resources_path_root)
  const apiUri = {
    createUri: `${apiTld}/resources`,
    updateUri: `${apiTld}/resources`,
    deleteUri: `${apiTld}/resources`,
    librariesUri: `${apiTld}/libraries`,
    booksUri: `${apiTld}/books`
  }

  //---------------
  // SEARCHING
  //----------------
  // make some controlled state for the search form
  const [search_form, setSearchForm] = useState({
    isbn: '', 
    book_title: '', 
    library_ID: '', 
    library_name: '',
    resource_ID: '',
    quantity_checked_out: '',
    quantity_available: ''
  })

  // Resources table data
  const [resources, setResources] = useState([])

  const { data: resourcesData, 
    isLoading: resourcesIsLoading, 
    isError: resourcesIsError } = useData(resources_path);

  // effect for filling in Resources table
  useEffect( () => {
    setResources(resourcesData);
  }, [resourcesIsLoading, resourcesData, resourcesIsError])

  //--------------
  // CREATE / POST
  //---------------
  // make some controlled state for the CREATE form
  const [create_form, setCreateForm] = useState({
    isbn: '', 
    library_ID: '', 
    quantity_checked_out: '',
    quantity_available: ''
  })

  // create state for any FK dropdowns
  // Libraries
  const [librariesDD, setLibrariesDD] = useState([])
  // Books
  const [booksDD, setBooksDD] = useState([])

  // CREATE form defaults
  const [createDefaults, setCreateDefaults] = useState({
      isbn: "",
      library_ID: "",
      quantity_available: "",
      quantity_checked_out: ""
  })

  const sendGet = useGet()

  const setupCreateForm = async () => {
    // get the dropdown data
    let booksData = await sendGet({
      "url": apiUri.booksUri
    });
    let librariesData = await sendGet({
      "url": apiUri.librariesUri
    });

    setBooksDD(booksData);
    setLibrariesDD(librariesData);

    // get the default value as the 
    // first element found
    // no error handling present
    const isbn_default = booksData[0]["isbn"];
    const library_ID_default = librariesData[0]["library_ID"];

    setCreateDefaults({
      isbn: isbn_default,
      library_ID: library_ID_default,
      quantity_available: "",
      quantity_checked_out: ""
    })
  }

  useEffect( () => {
    setupCreateForm()
  }, [] )

  //--------------
  // UPDATE / PUT
  //---------------
  // controlled state for the UPDATE form
  const [update_form, setUpdateForm] = useState({
    resource_ID: '',
    isbn: '', 
    library_ID: '', 
    quantity_checked_out: '',
    quantity_available: ''
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Resources</title>
        <meta name="description" content="resources page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>Resources</h1>
        <p>Welcome to the Resources page</p>

        <FormResources 
          locator={resources_path_root}
          setPath={setResourcePath}
          stateStuff={[search_form, setSearchForm]}
        />
        <br/>
        <FormResourcesPost 
          stateStuff={[create_form, setCreateForm]}
          apiUri={apiUri.createUri}
          affect={setResources}
          librariesDD={librariesDD}
          booksDD={booksDD}
          default_state={createDefaults}
        />
        <br />
        <UpdateFormResources
            stateStuff={[update_form, setUpdateForm]}
            apiUri={apiUri.updateUri}
            affect={setResources}
        />
        <br/>
        <Table2 
          data={resources}
          update_form={setUpdateForm}
          isLoading={resourcesIsLoading}
          isError={resourcesIsError}
          caption={<b>Resources</b>}
          affect={setResources}
          deleteUri={apiUri.deleteUri}
        />

      </main>
    </div>
  )
}

export default Resources