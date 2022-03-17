import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react'
import usePost from '@/hooks/usePost'
import useGet from '@/hooks/useGet'

export default function FormResourcesPost ( props: any ) {

    const [create_form, setCreateForm] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props

    const default_state = {
        isbn: '', 
        library_ID: '', 
        quantity_available: '',
        quantity_checked_out: ''
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
                <legend> Add a New Resource </legend>
                <p>
                    Fill out the form below with the information of the new resource
                </p>
                <label>
                    ISBN: <input 
                    type="text" 
                    name="isbn" 
                    onChange={onChangeCreate}
                    value={create_form.isbn}
                    required/>
                </label>
                <br/>
                <label>
                    Library ID: <input 
                    type="number" 
                    name="library_ID" 
                    onChange={onChangeCreate}
                    value={create_form.library_ID}
                    required/>
                </label>
                <br/>
                <label>
                    Quantity Available: <input 
                    type="number" 
                    name="quantity_available" 
                    onChange={onChangeCreate}
                    value={create_form.quantity_available}
                    required/>
                </label>
                <br />
                <label>
                    Quantity Checked Out: <input 
                    type="number" 
                    name="quantity_checked_out" 
                    onChange={onChangeCreate}
                    value={create_form.quantity_checked_out}
                    required/>
                </label>
                <br />
                <br />
                <input type="submit" value="Add Resource" required/>
            </fieldset>
          </form>
    )
}

