import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState, useEffect } from 'react';

export default function FormLibraries ( props: any ) {

    const {locator, setPath} = props;

    // make some controlled state for the forms
    const [searchForm, setSearchForm] = useState({
        library_ID: "",
        library_name: "",
        library_address: ""
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
                <legend> Find Super Duper Libraries in the Network </legend>
                <p>Fill out zero or more of the fields below to find matching libraries</p>
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
                    Library Name: <input 
                    type="text" 
                    name="library_name"
                    value={searchForm.library_name}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Library Address: <input 
                    type="text" 
                    name="library_address"
                    value={searchForm.library_address}
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