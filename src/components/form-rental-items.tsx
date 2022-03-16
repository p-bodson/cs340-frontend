import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

export default function FormRentalItems ( props: any ) {

    const router = useRouter();
    const {locator, setPath} = props;

    // make some controlled state for the forms
    const [searchForm, setSearchForm] = useState({
        rental_ID: "",
        resource_ID: "",
        queue_numb: "",
        rental_item_status: "",
        return_date: ""
    })
    const onChangeSearchForm = useChange(searchForm, setSearchForm);
    // for onChange to work, the names of each input
    // element in the forms must be unique and match
    // the names of the values in the form state

    // make some submission handlers for the different forms
    const sendSearch = (args: any) => {   
        let path = `${args.path_root}&`
        for (const key in args.data) {
            if (`${args.data[key]}` !== "") {
                path += `${key}=${encodeURIComponent(args.data[key])}&`;
            }   
        }
        args.setter(path);
    };
    const handleSearch = useSubmit(router.asPath, sendSearch, {
        "data": searchForm, 
        "path_root": locator, 
        "setter": setPath
    });

    return (
        <form onSubmit={handleSearch}>
            <fieldset>
                <legend> Find Rental Items for this Rental </legend>
                <p>Fill out zero or more of the fields below to find matching rental items</p>
                <label>
                    Resource ID: <input
                    type="number" 
                    name="resource_ID" 
                    value={searchForm.resource_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Queue Number: <input 
                    type="number" 
                    name="queue_numb" 
                    value={searchForm.queue_numb}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Rental Item Status: <input 
                    type="text" 
                    name="rental_item_status" 
                    value={searchForm.rental_item_status}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Return Date: <input 
                    type="date" 
                    name="return_date" 
                    value={searchForm.return_date}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br />
                <br />
                <input type="submit" value="Search" />
            </fieldset>
          </form>
    )
}