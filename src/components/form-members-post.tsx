import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react'
import usePost from '@/hooks/usePost'
import useGet from '@/hooks/useGet'

export default function FormMembersPost ( props: any ) {

    const [create_form, setCreateForm] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props

    const default_state = {
        member_first_name: "",
        member_last_name: "",
        member_phone: ""
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
                <legend> Add a New Member </legend>
                <p>
                    Fill out the form below with the information of the new member
                </p>
                <label>
                    First Name: <input 
                    type="text" 
                    name="member_first_name" 
                    onChange={onChangeCreate}
                    value={create_form.member_first_name}
                    required/>
                </label>
                <br/>
                <label>
                    Last Name: <input 
                    type="text" 
                    name="member_last_name" 
                    onChange={onChangeCreate}
                    value={create_form.member_last_name}
                    required/>
                </label>
                <br/>
                <label>
                    Phone Number: <input 
                    type="number" 
                    name="member_phone" 
                    onChange={onChangeCreate}
                    value={create_form.member_phone}
                    required/>
                </label>
                <br />
                <br />
                <input type="submit" value="Add Member" required/>
            </fieldset>
          </form>
    )
}

