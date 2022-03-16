import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'

export default function FormRentals ( props: any ) {

    const {locator, setPath} = props;
    const [search_form, setSearchForm] = props.stateStuff;

    const default_state = {
        rental_ID: "",
        member_ID: "",
        library_ID: "",
        rental_date: ""
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
                <legend> Find Rental Orders in the Super Duper Library Network </legend>
                <p>Fill out zero or more of the fields below to find matching rentals</p>
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
                    Member ID: <input 
                    type="number" 
                    name="member_ID"
                    value={search_form.member_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Library ID: <input 
                    type="number" 
                    name="library_ID"
                    value={search_form.library_ID}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Rental Date: <input 
                    type="date" 
                    name="rental_date"
                    value={search_form.rental_date}
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