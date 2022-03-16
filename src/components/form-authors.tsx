import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react';
import usePost from '@/hooks/usePost'
import useGet from '@/hooks/useGet'



export default function FormAuthors ( props: any ) {

    const [authors_form, setAuthorsForm] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props

    const default_state = {
        author_name: "",
    }

    // handle changes to input from user 
    const onChangeAuthorAdd = useChange(authors_form, setAuthorsForm);
    const handleSubmit = (params: any) => {  
        sendPost(params);
        setAuthorsForm(default_state)
        sendGet(params).then(
            (e) => {affect(e)}
        );
        
    }
    const sendPost = usePost();
    const sendGet = useGet();
    const handleAuthorAdd = useSubmit2( handleSubmit,
        {        
            "url": apiUri,
            "data": authors_form
        }
    );
    useEffect( () => {
        setAuthorsForm(default_state)
    }, [])

    return (
        <form onSubmit={handleAuthorAdd}>
        <fieldset>
            <legend> Add a New Author </legend>
            <p>Fill out the form below with the information of the new Author</p>
            <label>
                Name: <input 
                    type="text" 
                    name="author_name"
                    onChange={onChangeAuthorAdd}
                    value={authors_form.author_name}
                    required
                />
            </label>
            <br/>
            <br />
            <input type="submit" value="Add Author"/>
        </fieldset>
        </form>
    )
}