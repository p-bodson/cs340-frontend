import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'

export default function FormRentalItems ( props: any ) {

    const {locator, setPath} = props;
    const [search_form, setSearchForm] = props.stateStuff;

    const default_state = {
        rental_ID: "",
        resource_ID: "",
        queue_numb: "",
        rental_item_status: "",
        return_date: ""
    }

    const onChangeSearchForm = useChange(search_form, setSearchForm);
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
        setSearchForm(default_state)
    };
    const handleSearch = useSubmit2(sendSearch, {
        "data": search_form, 
        "path_root": locator, 
        "setter": setPath
    });

    return (
        <form onSubmit={handleSearch}>
            <fieldset>
                <legend> Find Rental Items in the Super Duper Library Network </legend>
                <p>Fill out zero or more of the fields below to find matching rental items</p>
                <label>
                    Rental ID: <input 
                    type="number" 
                    name="rental_ID"
                    value={search_form.rental_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Resource ID: <input 
                    type="number" 
                    name="resource_ID"
                    value={search_form.resource_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Queue Number: <input 
                    type="number" 
                    name="queue_numb"
                    value={search_form.queue_numb}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Rental Item Status: <input 
                    type="text" 
                    name="rental_item_status"
                    value={search_form.rental_item_status}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Return Date: <input 
                    type="date" 
                    name="return_date"
                    value={search_form.return_date}
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