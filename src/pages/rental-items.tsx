import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormRentalItems from '@/components/form-rental-items'
import FormRentalItemsPost from '@/components/form-rental-items-post'
import { useState, useEffect } from 'react'
import Table2 from '@/components/table-2'
import useData from '@/hooks/useData'
import UpdateFormRentalItems from '@/components/update-form-rental-items'



const RentalItems: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;

  const rental_items_path_root = `${apiTld}/rental-items`
  const [rental_items_path, setRentalItemsPath] = useState(rental_items_path_root)
  const createUri: string = `${apiTld}/rental-items`
  const updateUri: string = `${apiTld}/rental-items`
  const deleteUri: string = `${apiTld}/rental-items`

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
            apiUri={createUri}
            affect={setRentalItems}
          />
          <br />
          <UpdateFormRentalItems 
            stateStuff={[update_form, setUpdateForm]}
            apiUri={updateUri}
            affect={setRentalItems}
        />
        <br/>
          <Table2 
            data={rentalItems}
            update_form={setUpdateForm}
            isLoading={rentalItemsIsLoading}
            isError={rentalItemsIsError}
            caption={<b>Rentals</b>}
            affect={setRentalItems}
            deleteUri={deleteUri}
          />
        </main>
      </div>
    )
  }
  
  export default RentalItems