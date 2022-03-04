import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState, useEffect } from 'react';


export default function FormResources ( props: any ) {

    const {locator, setPath} = props;

    // make some controlled state for the search form
    const [search_form, setSearchForm] = useState({
        isbn: '', 
        book_title: '', 
        library_ID: '', 
        library_name: '',
        resource_ID: '',
        quantity_checked_out: '',
        quantity_available: ''
    })
    const onChangeSearchForm = useChange(search_form, setSearchForm);
    // for onChange to work, the names of each input
    // element in the forms must be unique and match
    // the names of the values in the form state

    // make some submission handlers for the different forms
    const sendSearch = (args: any) => {
        console.log(args.path_root);
        let path = `${args.path_root}?`   
        for (const key in args.data) {
            if (`${args.data[key]}` !== "") {
                path += `${key}=${encodeURIComponent(args.data[key])}&`;
            }   
        }
        console.log(path);
        args.setter(path);
    };
    const handleSearch = useSubmit("", sendSearch, {
        "data": search_form, 
        "path_root": locator, 
        "setter": setPath
    });

    return (
        <form onSubmit={handleSearch}>
            <fieldset>
                <legend> Find Super Duper Resources in the Network </legend>
                <p>Fill out zero or more of the fields below to find matching Books or Authors</p>
                <label>
                    Resource ID: <input 
                      type="text" 
                      name="resource_ID"
                      value={search_form.resource_ID}
                      onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Resource ISBN: <input 
                      type="text" 
                      name="isbn"
                      value={search_form.isbn}
                      onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Resource Title: <input 
                      type="text"
                      name="book_title" 
                      value={search_form.book_title}
                      onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Resource Location ID: <input
                      type="text"
                      name="library_ID"
                      value={search_form.library_ID}
                      onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Resource Location Name: <input
                      type="text"
                      name="library_name"
                      value={search_form.library_name}
                      onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Quantity Availble: <input
                      type="text"
                      name="quantity_available"
                      value={search_form.quantity_available}
                      onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Quantity Checked Out: <input
                      type="text"
                      name="quantity_checked_out"
                      value={search_form.quantity_checked_out}
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
