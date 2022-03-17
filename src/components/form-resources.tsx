import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'


export default function FormResources ( props: any ) {

    const {locator, setPath} = props;
    const [search_form, setSearchForm] = props.stateStuff;

    const onChangeSearchForm = useChange(search_form, setSearchForm);
    // for onChange to work, the names of each input
    // element in the forms must be unique and match
    // the names of the values in the form state

    const default_state = {
      resource_ID: '',
      isbn: '', 
      book_title: '', 
      library_ID: '', 
      library_name: '',
      quantity_checked_out: '',
      quantity_available: ''
    }

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
                <legend> Find Super Duper Resources in the Network </legend>
                <p>Fill out zero or more of the fields below to find matching resources</p>
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
                    Library Name: <input
                      type="text"
                      name="library_name"
                      value={search_form.library_name}
                      onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Quantity Available: <input
                      type="number"
                      name="quantity_available"
                      value={search_form.quantity_available}
                      onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Quantity Checked Out: <input
                      type="number"
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

