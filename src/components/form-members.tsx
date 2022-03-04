import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState, useEffect } from 'react';

export default function FormMembers ( props: any ) {

    const {locator, setPath} = props;

    // make some controlled state for the forms
    const [searchForm, setSearchForm] = useState({
        member_ID: "",
        member_first_name: "",
        member_last_name: "",
        member_phone: ""
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
                <legend> Find Super Duper Library Network Members </legend>
                <p>Fill out zero or more of the fields below to find matching members</p>
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
                    Member First Name: <input
                    type="text" 
                    name="member_first_name" 
                    value={searchForm.member_first_name}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Member Last Name: <input 
                    type="text" 
                    name="member_last_name" 
                    value={searchForm.member_last_name}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Member Phone Number: <input 
                    type="number" 
                    name="member_phone" 
                    value={searchForm.member_phone}
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