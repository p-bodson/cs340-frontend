import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormRentals from '@/components/form-rentals'
import FormRentalsPost from '@/components/form-rentals-post'
import { useState, useEffect } from 'react'
import Table2 from '@/components/table-2'
import useData from '@/hooks/useData'
import UpdateFormRentals from '@/components/update-form-rentals'
import useGet from "@/hooks/useGet"




const Rentals: NextPage = () => {
  const apiTld = process.env.NEXT_PUBLIC_API_TLD;

  const rentals_path_root = `${apiTld}/rentals`
  const [rentals_path, setRentalsPath] = useState(rentals_path_root)
  const apiUri = {
    createUri: `${apiTld}/rentals`,
    updateUri: `${apiTld}/rentals`,
    deleteUri: `${apiTld}/rentals`,
    librariesUri: `${apiTld}/libraries`,
    membersUri: `${apiTld}/members`
  }

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

    // create state for any FK dropdowns
  // Libraries
  const [librariesDD, setLibrariesDD] = useState([])
  // Books
  const [membersDD, setMembersDD] = useState([])

  // CREATE form defaults
  const [createDefaults, setCreateDefaults] = useState({
      member_ID: "",
      library_ID: "",
      rental_date: ""
  })

  const sendGet = useGet()

  const setupCreateForm = async () => {
    // get the dropdown data
    let membersData = await sendGet({
      "url": apiUri.membersUri
    });
    let librariesData = await sendGet({
      "url": apiUri.librariesUri
    });

    setMembersDD(membersData);
    setLibrariesDD(librariesData);

    // get the default value as the 
    // first element found
    // no error handling present
    const member_ID_default = membersData[0]["member_ID"];
    const library_ID_default = librariesData[0]["library_ID"];

    setCreateDefaults({
      member_ID: member_ID_default,
      library_ID: library_ID_default,
      rental_date: ""
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
    member_ID: "",
    library_ID: "",
    rental_date: ""
  })

  // UPDATE form defaults
  const [updateDefaults, setUpdateDefaults] = useState({
    rental_ID: "",
    member_ID: "",
    library_ID: "",
    rental_date: ""
  })

  const setupUpdateForm = async () => {
    // get the dropdown data
    let membersData = await sendGet({
      "url": apiUri.membersUri
    });
    let librariesData = await sendGet({
      "url": apiUri.librariesUri
    });

    setMembersDD(membersData);
    setLibrariesDD(librariesData);

    // get the default value as the 
    // first element found
    // no error handling present
    const member_ID_default = membersData[0]["member_ID"];
    const library_ID_default = librariesData[0]["library_ID"];

    setUpdateDefaults({
      rental_ID: "",
      member_ID: member_ID_default,
      library_ID: library_ID_default,
      rental_date: ""
    })
  }

  useEffect( () => {
    setupUpdateForm()
  }, [] )

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
            apiUri={apiUri.createUri}
            affect={setRentals}
            librariesDD={librariesDD}
            membersDD={membersDD}
            default_state={createDefaults}
          />
          <br />
          <UpdateFormRentals 
            stateStuff={[update_form, setUpdateForm]}
            apiUri={apiUri.updateUri}
            affect={setRentals}
            librariesDD={librariesDD}
            membersDD={membersDD}
            default_state={updateDefaults}
        />
          <Table2 
            data={rentals}
            update_form={setUpdateForm}
            isLoading={rentalsIsLoading}
            isError={rentalsIsError}
            caption={<b>Rentals</b>}
            affect={setRentals}
            deleteUri={apiUri.deleteUri}
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