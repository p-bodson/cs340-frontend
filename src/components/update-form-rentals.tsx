import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react';
import usePut from '@/hooks/usePut'
import useGet from '@/hooks/useGet'
import Dropdown from "@/components/dropdown"



export default function UpdateFormRentals ( props: any ) {

    const [form_data, setFormData] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props
    const {membersDD,
        librariesDD,
        default_state} = props;

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
            <legend> Edit a Rental </legend>
            <p>Fill out the form below with the information of the rental you want to update</p>
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
                Member ID: <Dropdown
                    name={"member_ID"}
                    onChange={onChangeHandleUpdate}
                    value={form_data.member_ID}
                    descriptor={"member_first_name"}
                    options={membersDD}
                />
            </label>
            <br/>
            <label>
                Library ID: <Dropdown
                    name={"library_ID"}
                    onChange={onChangeHandleUpdate}
                    value={form_data.library_ID}
                    descriptor={"library_name"}
                    options={librariesDD}
                />
            </label>
            <br/>
            <label>
                Rental Date: <input 
                    type="text" 
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