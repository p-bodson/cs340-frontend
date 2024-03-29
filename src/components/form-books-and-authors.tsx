import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'


export default function FormBooksAndAuthors ( props: any ) {

    const {locator, setPath} = props;
    const [search_form, setSearchForm] = props.stateStuff;

    const onChangeSearchForm = useChange(search_form, setSearchForm);
    // for onChange to work, the names of each input
    // element in the forms must be unique and match
    // the names of the values in the form state

    const default_state = {
        isbn: "",
        book_title: "",
        author_name: "",
        author_ID: ""
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
                <legend> Find Super Duper Books And Authors in the Network </legend>
                <p>Fill out zero or more of the fields below to find matching Books or Authors</p>
                <label>
                    Book ISBN: <input 
                      type="text" 
                      name="isbn"
                      value={search_form.isbn}
                      onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Book Title: <input 
                      type="text"
                      name="book_title" 
                      value={search_form.book_title}
                      onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Author Name: <input
                      type="text"
                      name="author_name"
                      value={search_form.author_name}
                      onChange={onChangeSearchForm}
                    />
                </label>
                <br/>
                <label>
                    Author ID: <input
                      type="text"
                      name="author_ID"
                      value={search_form.author_ID}
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

