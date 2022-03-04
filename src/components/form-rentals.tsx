import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState, useEffect } from 'react';

export default function FormRentals ( props: any ) {

    const {locator, setPath} = props;

    // make some controlled state for the forms
    const [searchForm, setSearchForm] = useState({
        rental_ID: "",
        member_ID: "",
        library_ID: "",
        rental_date: ""
    })
    const onChangeSearchForm = useChange(searchForm, setSearchForm);
    // for onChange to work, the names of each input
    // element in the forms must be unique and match
    // the names of the values in the form state

    // make some submission handlers for the different forms
    const sendSearch = (args: any) => {   
        let path = `${args.path_root}?`   
        for (const key in args.data) {
            if (`${args.data[key]}` !== "") {
                path += `${key}=${encodeURIComponent(args.data[key])}&`;
            }   
        }
        args.setter(path);
    };
    const handleSearch = useSubmit("", sendSearch, {
        "data": searchForm, 
        "path_root": locator, 
        "setter": setPath
    });

    return (
        <form onSubmit={handleSearch}>
            <fieldset>
                <legend> Find Rental Orders in the Super Duper Library Network </legend>
                <p>Fill out zero or more of the fields below to find matching rentals</p>
                <label>
                    Rental ID: <input 
                    type="number" 
                    name="rental_ID"
                    value={searchForm.rental_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Member ID: <input 
                    type="number" 
                    name="member_ID"
                    value={searchForm.member_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Library ID: <input 
                    type="number" 
                    name="library_ID"
                    value={searchForm.library_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Rental Date: <input 
                    type="date" 
                    name="rental_date"
                    value={searchForm.rental_date}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <br />
                <input type="submit" value="Search" />
            </fieldset>
            <br />
        </form>
    )
}