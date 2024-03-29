import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react';
import usePut from '@/hooks/usePut'
import useGet from '@/hooks/useGet'



export default function UpdateFormBooks ( props: any ) {

    const [form_data, setFormData] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props
    // make some controlled state for the form
    const default_state = {
        isbn: "",
        book_title: ""
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
            <legend> Edit a Book </legend>
            <p>Fill out the form below with the information of the book you want to update</p>
            <p>If you click on the UPDATE button of a row, the form will be prefilled with that row{"'"}s data</p>
            <label>
                ISBN: <input 
                    type="text" 
                    name="isbn"
                    onChange={onChangeHandleUpdate}
                    value={form_data.isbn}
                    required
                />
            </label>
            <br/>
            <label>
                Title: <input 
                    type="text" 
                    name="book_title"
                    onChange={onChangeHandleUpdate}
                    value={form_data.book_title}
                    required
                />
            </label>
            <br/>
            <br />
            <input type="submit" value="Update Book"/>
        </fieldset>
        </form>
    )
}