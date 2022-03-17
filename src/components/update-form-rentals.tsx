import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react';
import usePut from '@/hooks/usePut'
import useGet from '@/hooks/useGet'



export default function UpdateFormRentals ( props: any ) {

    const [form_data, setFormData] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props
    // make some controlled state for the form
    const default_state = {
        rental_ID: "",
        member_ID: "",
        library_ID: "",
        rental_date: ""
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
            <legend> Edit a Rental </legend>
            <p>Fill out the form below with the information of the rental to update one </p>
            <p>If you click on the UPDATE button of a row, the form will be prefilled with data</p>
            <label>
                Rental ID: <input 
                    type="number" 
                    name="rental_ID"
                    onChange={onChangeHandleUpdate}
                    value={form_data.rental_ID}
                    required
                />
            </label>
            <br/>
            <label>
                Member ID: <input 
                    type="number" 
                    name="member_ID"
                    onChange={onChangeHandleUpdate}
                    value={form_data.member_ID}
                    required
                />
            </label>
            <br/>
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
                Rental Date: <input 
                    type="date" 
                    name="rental_date"
                    onChange={onChangeHandleUpdate}
                    value={form_data.rental_date}
                    required
                />
            </label>
            <br/>
            <br/>
            <input type="submit" value="Update Rental"/>
        </fieldset>
        </form>
    )
}