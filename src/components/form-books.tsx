import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'

export default function FormBooks ( props: any ) {

    const {locator, setPath} = props;
    const [search_form, setSearchForm] = props.stateStuff;

    const default_state = {
        isbn:"",
        book_title: ""
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
    const handleSearch = useSubmit2( sendSearch, {
        "data": search_form, 
        "path_root": locator, 
        "setter": setPath
    });

    return (
        <form onSubmit={handleSearch}>
            <fieldset>
                <legend> Find Super Duper Library Network Books </legend>
                <p>Fill out zero or more of the fields below to find matching books</p>
                <label>
                    ISBN: <input 
                    type="text"
                    name="isbn"
                    value={search_form.isbn}
                    onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Title: <input
                    type="text" 
                    name="book_title" 
                    value={search_form.book_title}
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