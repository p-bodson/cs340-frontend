import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react';
import usePut from '@/hooks/usePut'
import useGet from '@/hooks/useGet'
import Dropdown from "@/components/dropdown"



export default function UpdateFormResources ( props: any ) {

    const [form_data, setFormData] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props
    const {booksDD,
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
            <legend> Edit a Resource </legend>
            <p>Fill out the form below with the information of the resource you want to update</p>
            <p>If you click on the UPDATE button of a row, the form will be prefilled with that row{"'"}s data</p>
            <label>
                Resource ID: <input 
                    type="text" 
                    name="resource_ID"
                    onChange={onChangeHandleUpdate}
                    value={form_data.resource_ID}
                    required
                />
            </label>
            <br/>
            <label>
                ISBN: <Dropdown 
                    name={"isbn"} 
                    onChange={onChangeHandleUpdate}
                    value={form_data.isbn}
                    descriptor={"book_title"}
                    options={booksDD}
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
                Quantity Available: <input 
                    type="number" 
                    name="quantity_available"
                    onChange={onChangeHandleUpdate}
                    value={form_data.quantity_available}
                    required
                />
            </label>
            <br/>
            <label>
                Quantity Checked Out: <input 
                    type="number" 
                    name="quantity_checked_out"
                    onChange={onChangeHandleUpdate}
                    value={form_data.quantity_checked_out}
                    required
                />
            </label>
            <br/>
            <br />
            <input type="submit" value="Update Resource"/>
        </fieldset>
        </form>
    )
}