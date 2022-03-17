import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormResources from '@/components/form-resources'
import { useState, useEffect } from 'react'
import Table2 from '@/components/table-2'
import useData from '@/hooks/useData';

const Resources: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;

  const resources_path_root = `${apiTld}/resources`  
  const [resources_path, setResourcePath] = useState(resources_path_root)

  // controlled state for search form
  const [search_form, setSearchForm] = useState({
    isbn: '', 
    book_title: '', 
    library_ID: '', 
    library_name: '',
    resource_ID: '',
    quantity_checked_out: '',
    quantity_available: ''
  })

  // initial table data

  const [resources, setResources] = useState({
    isbn: '', 
    book_title: '', 
    library_ID: '', 
    library_name: '',
    resource_ID: '',
    quantity_checked_out: '',
    quantity_available: ''
  })

  const { data: resourcesData, 
    isLoading: resourcesIsLoading, 
    isError: resourcesIsError } = useData(resources_path);

  // effect for filling in Books_Authors table
  useEffect( () => {
    setResources(resourcesData);
  }, [resourcesIsLoading, resourcesData, resourcesIsError])

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
          <Table2 
            data={resources}
            isLoading={resourcesIsLoading}
            isError={resourcesIsError}
            caption={<b>Resources</b>}
          />

          <br />
          <form>
            <fieldset>
                <legend> Add a New Resource </legend>
                <p>Fill out the form below with the information of the new resource</p>
                <label>
                    ISBN: <input type="text" name="add_resource_isbn" required/>
                </label>
                <br/>
                <label>
                    Resource Location: <select name="add_resource_location">
                      <option value="1"> Library 1</option>
                      <option value="2"> Library 2</option>
                      <option value="3"> Library 3</option>
                    </select>
                </label>
                <br/>
                <label>
                    Quantity Total: <input type="number" name="add_resource_total" required/>
                </label>
                <br/>
                <br />
                <input type="submit" value="Add Resource" required/>
            </fieldset>
          </form>
          <br/>


        </main>
  
      </div>
    )
  }
  
  export default Resources