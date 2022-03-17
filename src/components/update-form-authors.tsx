import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react';
import usePut from '@/hooks/usePut'
import useGet from '@/hooks/useGet'



export default function UpdateFormAuthors ( props: any ) {

    const [form_data, setFormData] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props
    // make some controlled state for the form
    const default_state = {
        author_ID: "",
        author_name: ""
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
            <legend> Edit a Author </legend>
            <p>Fill out the form below with the information of the author you want to update</p>
            <p>If you click on the UPDATE button of a row, the form will be prefilled with that row{"'"}s data</p>
            <label>
                Author ID: <input 
                    type="number" 
                    name="author_ID"
                    onChange={onChangeHandleUpdate}
                    value={form_data.author_ID}
                    required
                />
            </label>
            <br/>
            <label>
                Author Name: <input 
                    type="text" 
                    name="author_name"
                    onChange={onChangeHandleUpdate}
                    value={form_data.author_name}
                    required
                />
            </label>
            <br/>
            <br />
            <input type="submit" value="Update Author"/>
        </fieldset>
        </form>
    )
}