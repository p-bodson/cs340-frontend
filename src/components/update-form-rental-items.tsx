import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react';
import usePut from '@/hooks/usePut'
import useGet from '@/hooks/useGet'
import Dropdown from "@/components/dropdown"




export default function UpdateFormRentalItems ( props: any ) {

    const [form_data, setFormData] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props
    const {resourcesDD, default_state} = props;

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
    }, [default_state])

    return (
        <form onSubmit={handleUpdate}>
        <fieldset>
            <legend> Edit a Rental Item </legend>
            <p>Fill out the form below with the information of the rental item you want to update</p>
            <p>If you click on the UPDATE button of a row, the form will be prefilled with that row{"'"}s data</p>
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
                Resource ID: <Dropdown
                    name={"resource_ID"}
                    onChange={onChangeHandleUpdate}
                    value={form_data.resource_ID}
                    descriptor={""}
                    options={resourcesDD}
                />
            </label>
            <br/>
            <label>
                Queue Number: <input 
                    type="number" 
                    name="queue_numb"
                    onChange={onChangeHandleUpdate}
                    value={form_data.queue_numb}
                    required
                />
            </label>
            <br/>
            <label>
                Rental Item Status: <input 
                    type="text" 
                    name="rental_item_status"
                    onChange={onChangeHandleUpdate}
                    value={form_data.rental_item_status}
                    required
                />
            </label>
            <br/>
            <label>
                Return Date: <input 
                    type="date" 
                    name="return_date"
                    onChange={onChangeHandleUpdate}
                    value={form_data.return_date}
                    
                />
            </label>
            <br/>
            <br/>
            <input type="submit" value="Update Rental"/>
        </fieldset>
        </form>
    )
}