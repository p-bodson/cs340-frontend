import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormRentals from '@/components/form-rentals'
import FormRentalsPost from '@/components/form-rentals-post'
import { useState, useEffect } from 'react'
import Table2 from '@/components/table-2'
import useData from '@/hooks/useData'
import UpdateFormRentals from '@/components/update-form-rentals'



const Rentals: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;

  const rentals_path_root = `${apiTld}/rentals`
  const [rentals_path, setRentalsPath] = useState(rentals_path_root)
  const createUri: string = `${apiTld}/rentals`
  const updateUri: string = `${apiTld}/rentals`
  const deleteUri: string = `${apiTld}/rentals`

  //---------------
  // SEARCHING
  //----------------
  // make some controlled state for the search form
  const [search_form, setSearchForm] = useState({
    rental_ID: "",
    member_ID: "",
    library_ID: "",
    rental_date: ""
  })

  // the Rentals table data
  const [rentals, setRentals] = useState([])
  
  const { data: rentalData, 
    isLoading: rentalsIsLoading, 
    isError: rentalsIsError } = useData(rentals_path);

  // effect for filling in Libraries table
  useEffect( () => {
    setRentals(rentalData);
  }, [rentalData, rentalsIsLoading, rentalsIsError])


  //--------------
  // CREATE / POST
  //---------------
  // make some controlled state for the CREATE form
  const [create_form, setCreateForm] = useState({
    member_ID: "",
    library_ID: "",
    rental_date: ""
  })

  //--------------
  // UPDATE / PUT
  //---------------
  // controlled state for the UPDATE form
  const [update_form, setUpdateForm] = useState({
    rental_ID: "",
    member_ID: "",
    library_ID: "",
    rental_date: ""
  })

  return (
      <div className={styles.container}>
        <Head>
          <title>Rentals</title>
          <meta name="description" content="Rentals page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Rentals</h1>
          <p>Welcome to the Rentals page</p>

          <FormRentals
            locator={rentals_path_root}
            setPath={setRentalsPath}
            stateStuff={[search_form, setSearchForm]}
          />
          <FormRentalsPost 
            stateStuff={[create_form, setCreateForm]}
            apiUri={createUri}
            affect={setRentals}
          />
          <br />
          <UpdateFormRentals 
            stateStuff={[update_form, setUpdateForm]}
            apiUri={updateUri}
            affect={setRentals}
        />
          <Table2 
            data={rentals}
            update_form={setUpdateForm}
            isLoading={rentalsIsLoading}
            isError={rentalsIsError}
            caption={<b>Rentals</b>}
            affect={setRentals}
            deleteUri={deleteUri}
          />
          <ul>
            <li>Clicking on a rental_ID above redirects to that rental{"'"}s rental_items page</li>
            <li>Clicking DELETE button deletes that rental along with its associated rental_items</li>
          </ul>
        </main>
      </div>
    )
  }
  
  export default Rentals