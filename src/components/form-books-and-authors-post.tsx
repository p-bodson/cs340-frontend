import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react'; 
import Dropdown from "@/components/dropdown";
import usePost from '@/hooks/usePost'
import useGet from '@/hooks/useGet'


export default function FormBooksAndAuthorsPost ( props: any ) {

    const [create_form, setCreateForm] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props



    // make some controlled state for the form
    const default_state = {
        isbn: "",
        author_ID: ""
    }

    // handle changes to input from user
    const onChangeCreate = useChange(create_form, setCreateForm);
    const handleSubmit = async (params: any) => {  
        await sendPost(params);
        setCreateForm(default_state)
        const data = await sendGet(params);
        affect(data)
    }

    const sendPost = usePost();
    const sendGet = useGet();
    const handleCreate = useSubmit2(handleSubmit,
        {        
            "url": apiUri.createUri,
            "data": create_form
        }
    );
    useEffect( () => {
        setCreateForm(default_state)
    }, [])

    return (

        <form onSubmit={handleCreate}>
            <fieldset>
                <legend> Connect Books with Authors </legend>
                <p>Fill out the form below with the information of the connection</p>
                <label>
                    ISBN:<Dropdown
                        name={"isbn"}
                        onChange={onChangeCreate}
                        value={create_form.isbn}
                        descriptor={"book_title"}
                        apiUri={apiUri.booksUri}
                        form_data={create_form}
                        setter={setCreateForm}
                    />
                </label>
                <br/>
                <label>
                    Author ID:<Dropdown
                        name={"author_ID"}
                        onChange={onChangeCreate}
                        value={create_form.author_ID}
                        descriptor={"author_name"}
                        apiUri={apiUri.authorsUri}
                        form_data={create_form}
                        setter={setCreateForm}
                    />
                </label>
                <br />
                <input type="submit" value="Add Connection" required/>
            </fieldset>
          </form>
    )
}
