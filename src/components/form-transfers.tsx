import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState, useEffect } from 'react';

export default function FormTransfers ( props: any ) {

    const {locator, setPath} = props;

      // make some controlled state for the forms
    const [searchForm, setSearchForm] = useState({
        transfer_ID: "",
        source_library_ID: "",
        destination_library_ID: "",
        transfer_date: ""
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
                <legend> Find Transfer Orders in the Super Duper Library Network </legend>
                <p>Fill out zero or more of the fields below to find matching transfers</p>
                <label>
                    Transfer ID: <input 
                    type="number" 
                    name="transfer_ID"
                    value={searchForm.transfer_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Source Library ID: <input 
                    type="number" 
                    name="source_library_ID" 
                    value={searchForm.source_library_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Destination Library ID: <input 
                    type="number" 
                    name="destination_library_ID" 
                    value={searchForm.destination_library_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Transfer Date: <input 
                    type="date" 
                    name="transfer_date" 
                    value={searchForm.transfer_date}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br />
                <br />
                <input type="submit" value="Search" />
            </fieldset>
          <br />
        </form>
    )
}