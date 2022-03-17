import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormRentals from '@/components/form-rentals'
import FormRentalsPost from '@/components/form-rentals-post'
import { useState, useEffect } from 'react'
import Table2 from '@/components/table-2'
import useData from '@/hooks/useData';


const Rentals: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;

  const rentals_path_root = `${apiTld}/rentals`
  const [rentals_path, setRentalsPath] = useState(rentals_path_root)
  const createUri: string = `${apiTld}/rentals`

  //---------------
  // SEARCHING
  //----------------
  // make some controlled state for the search form
  const [search_form, setSearchForm] = useState({})

  // the Rentals table data
  const [rentals, setRentals] = useState([])
  
  const { data: rentalsData, 
    isLoading: rentalsIsLoading, 
    isError: rentalsIsError } = useData(rentals_path);

  // effect for filling in Libraries table
  useEffect( () => {
    setRentals(rentalsData);
  }, [rentalsData, rentalsIsLoading, rentalsIsError])

  //--------------
  // CREATE / POST
  //---------------
  // make some controlled state for the CREATE form
  const [create_form, setCreateForm] = useState({
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
          <Table2 
            data={rentals}
            isLoading={rentalsIsLoading}
            isError={rentalsIsError}
            caption={<b>Rentals</b>}
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