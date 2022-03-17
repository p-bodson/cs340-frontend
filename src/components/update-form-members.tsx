import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react';
import usePut from '@/hooks/usePut'
import useGet from '@/hooks/useGet'



export default function UpdateFormMembers ( props: any ) {

    const [form_data, setFormData] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props
    // make some controlled state for the form
    const default_state = {
        member_ID: "",
        member_first_name: "",
        member_last_name: "",
        member_phone: "",
    }

    // handle changes to input from user 
    const onChangeHandleUpdate = useChange(form_data, setFormData);

    const sendPut = usePut();
    const sendGet = useGet();

    // and handle the button submission
    const handleSubmit = async (params: any) => {  
        // send the request
        await sendPut(params);
        // clear the form for more input
        setFormData(default_state)
        // update the data displayed on the table
        const data = await sendGet(params)
        affect(data);
    }

    // this is the actually function for form submission to run
    const handleUpdate = useSubmit2( handleSubmit,
        {        
            "url": apiUri,
            "data": form_data
        }
    );

    // make sure the page loads with nothing already in the forms
    useEffect( () => {
        setFormData(default_state)
    }, [])

    return (
        <form onSubmit={handleUpdate}>
        <fieldset>
            <legend> Edit a Member </legend>
            <p>Fill out the form below with the information of the member to update one </p>
            <p>If you click on the UPDATE button of a row, the form will be prefilled with data</p>
            <label>
                ID: <input 
                    type="number" 
                    name="member_ID"
                    onChange={onChangeHandleUpdate}
                    value={form_data.member_ID}
                    required
                />
            </label>
            <br/>
            <label>
                First Name: <input 
                    type="text" 
                    name="member_first_name"
                    onChange={onChangeHandleUpdate}
                    value={form_data.member_first_name}
                    required
                />
            </label>
            <br/>
            <label>
                Last Name: <input 
                    type="text" 
                    name="member_last_name"
                    onChange={onChangeHandleUpdate}
                    value={form_data.member_last_name}
                    required
                />
            </label>
            <br/>
            <label>
                Phone Number: <input 
                    type="text" 
                    name="member_phone"
                    onChange={onChangeHandleUpdate}
                    value={form_data.member_phone}
                    required
                />
            </label>
            <br/>
            <br />
            <input type="submit" value="Update Member"/>
        </fieldset>
        </form>
    )
}