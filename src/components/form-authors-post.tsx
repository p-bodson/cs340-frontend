import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react'
import usePost from '@/hooks/usePost'
import useGet from '@/hooks/useGet'

export default function FormAuthorsPost ( props: any ) {

    const [create_form, setCreateForm] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props

    const default_state = {
        author_name: ""
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
    const handleCreate = useSubmit2( handleSubmit,
        {        
            "url": apiUri,
            "data": create_form
        }
    );
    useEffect( () => {
        setCreateForm(default_state)
    }, [])

    return (

        <form onSubmit={handleCreate}>
            <fieldset>
                <legend> Add a New Author </legend>
                <p>
                    Fill out the form below with the information of the new author
                </p>
                <label>
                    Author Name: <input 
                    type="text" 
                    name="author_name" 
                    onChange={onChangeCreate}
                    value={create_form.author_name}
                    required/>
                </label>
                <br />
                <br />
                <input type="submit" value="Add Author" required/>
            </fieldset>
          </form>
    )
}

