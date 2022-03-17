import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormRentalItems from '@/components/form-rental-items'
import FormRentalItemsPost from '@/components/form-rental-items-post'
import { useState, useEffect } from 'react'
import Table2 from '@/components/table-2'
import useData from '@/hooks/useData'
import UpdateFormRentalItems from '@/components/update-form-rental-items'
import useGet from "@/hooks/useGet"



const RentalItems: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;

  const rental_items_path_root = `${apiTld}/rental-items`
  const [rental_items_path, setRentalItemsPath] = useState(rental_items_path_root)
  const apiUri = {
    createUri: `${apiTld}/rental-items`,
    updateUri: `${apiTld}/rental-items`,
    deleteUri: `${apiTld}/rental-items`,
    resourcesUri: `${apiTld}/resources`,
  }

  //---------------
  // SEARCHING
  //----------------
  // make some controlled state for the search form
  const [search_form, setSearchForm] = useState({
    rental_ID: "",
    resource_ID: "",
    queue_numb: "",
    rental_item_status: "",
    return_date: ""
  })

  // the Rental Items table data
  const [rentalItems, setRentalItems] = useState([])
  
  const { data: rentalItemData, 
    isLoading: rentalItemsIsLoading, 
    isError: rentalItemsIsError } = useData(rental_items_path);

  // effect for filling in Libraries table
  useEffect( () => {
    setRentalItems(rentalItemData);
  }, [rentalItemData, rentalItemsIsLoading, rentalItemsIsError])


  //--------------
  // CREATE / POST
  //---------------
  // make some controlled state for the CREATE form
  const [create_form, setCreateForm] = useState({
    resource_ID: "",
    queue_numb: "",
    rental_item_status: "",
    return_date: ""
  })

  // create state for any FK dropdowns
  // Resources
  const [resourcesDD, setResourcesDD] = useState([])

  // CREATE form defaults
  const [createDefaults, setCreateDefaults] = useState({
      resource_ID: "",
      queue_numb: "",
      rental_item_status: "",
      return_date: ""
  })

  const sendGet = useGet()

  const setupCreateForm = async () => {
    // get the dropdown data
    let resourcesData = await sendGet({
      "url": apiUri.resourcesUri
    });

    setResourcesDD(resourcesData);

    // get the default value as the 
    // first element found
    // no error handling present
    const resource_ID_default = resourcesData[0]["resource_ID"];

    setCreateDefaults({
      resource_ID: resource_ID_default,
      queue_numb: "",
      rental_item_status: "",
      return_date: ""
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
    rental_ID: "",
    resource_ID: "",
    queue_numb: "",
    rental_item_status: "",
    return_date: ""
  })

  // UPDATE form defaults
  const [updateDefaults, setUpdateDefaults] = useState({
    rental_ID: "",
    resource_ID: "",
    queue_numb: "",
    rental_item_status: "",
    return_date: ""
  })

  const setupUpdateForm = async () => {
    // get the dropdown data
    let resourcesData = await sendGet({
      "url": apiUri.resourcesUri
    });

    setResourcesDD(resourcesData);

    // get the default value as the 
    // first element found
    // no error handling present
    const resource_ID_default = resourcesData[0]["resource_ID"];

    setUpdateDefaults({
      rental_ID: "",
      resource_ID: resource_ID_default,
      queue_numb: "",
      rental_item_status: "",
      return_date: ""
    })
  }

  useEffect( () => {
    setupUpdateForm()
  }, [] )

  return (
      <div className={styles.container}>
        <Head>
          <title>Rental Items</title>
          <meta name="description" content="Rental Items page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Rental Items</h1>
          <p>Welcome to the Rental Items page</p>

          <FormRentalItems
            locator={rental_items_path_root}
            setPath={setRentalItemsPath}
            stateStuff={[search_form, setSearchForm]}
          />
          <FormRentalItemsPost 
            stateStuff={[create_form, setCreateForm]}
            apiUri={apiUri.createUri}
            affect={setRentalItems}
            resourcesDD={resourcesDD}
            default_state={createDefaults}
          />
          <br />
          <UpdateFormRentalItems 
            stateStuff={[update_form, setUpdateForm]}
            apiUri={apiUri.updateUri}
            affect={setRentalItems}
            resourcesDD={resourcesDD}
            default_state={createDefaults}
        />
        <br/>
          <Table2 
            data={rentalItems}
            update_form={setUpdateForm}
            isLoading={rentalItemsIsLoading}
            isError={rentalItemsIsError}
            caption={<b>Rentals</b>}
            affect={setRentalItems}
            deleteUri={apiUri.deleteUri}
          />
        </main>
      </div>
    )
  }
  
  export default RentalItems