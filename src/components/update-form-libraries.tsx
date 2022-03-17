import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react';
import usePut from '@/hooks/usePut'
import useGet from '@/hooks/useGet'



export default function UpdateFormLibraries ( props: any ) {

    const [form_data, setFormData] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props
    // make some controlled state for the form
    const default_state = {
        library_ID: "",
        library_name: "",
        library_address: ""
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
            <legend> Edit a Library </legend>
            <p>Fill out the form below with the information of the library you want to update</p>
            <p>If you click on the UPDATE button of a row, the form will be prefilled with that row{"'"}s data</p>
            <label>
                Library ID: <input 
                    type="number" 
                    name="library_ID"
                    onChange={onChangeHandleUpdate}
                    value={form_data.library_ID}
                    required
                />
            </label>
            <br/>
            <label>
                Library Name: <input 
                    type="text" 
                    name="library_name"
                    onChange={onChangeHandleUpdate}
                    value={form_data.library_name}
                    required
                />
            </label>
            <br/>
            <label>
                Library Address: <input 
                    type="text" 
                    name="library_address"
                    onChange={onChangeHandleUpdate}
                    value={form_data.library_address}
                    required
                />
            </label>
            <br />
            <input type="submit" value="Update Library"/>
        </fieldset>
        </form>
    )
}