import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react';
import usePost from '@/hooks/usePost'
import useGet from '@/hooks/useGet'


export default function FormLibrariesPost ( props: any ) {

    const [create_form, setCreateForm] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props

    const default_state = {
        library_ID: "",
        library_name: "",
        library_address: ""
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
                <legend> Add a New Library </legend>
                <p>
                    Fill out the form below with the information of the new library
                </p>
                <label>
                    Name: <input 
                    type="text" 
                    name="library_name" 
                    onChange={onChangeCreate}
                    value={create_form.library_name}
                    required
                    />
                </label>
                <br/>
                <label>
                    Address: <input 
                    type="text" 
                    name="library_address"
                    onChange={onChangeCreate}
                    value={create_form.library_address}
                    required
                    />
                </label>
                <br/>
                <br />
                <input type="submit" value="Add Library" required/>
            </fieldset>
        </form>
    )
}

