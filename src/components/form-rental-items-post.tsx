import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react'; 
import usePost from '@/hooks/usePost'
import useGet from '@/hooks/useGet'
import Dropdown from "@/components/dropdown"


export default function FormRentalItemsPost ( props: any ) {

    const [create_form, setCreateForm] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props
    const {resourcesDD} = props
    const {default_state} = props

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
    }, [default_state])

    return (

        <form onSubmit={handleCreate}>
            <fieldset>
                <legend> Add a Rental Item </legend>
                <p>
                    Fill out the form below with the information of the new rental item for this rental
                </p>
                <label>
                    Resource ID: <Dropdown 
                        name={"resource_ID"} 
                        onChange={onChangeCreate}
                        value={create_form.resource_ID}
                        descriptor={""}
                        options={resourcesDD}
                    />
                </label>
                <br/>
                <label>
                    Queue Number: <input 
                    type="number" 
                    name="queue_numb"
                    onChange={onChangeCreate}
                    value={create_form.queue_numb}
                    required/>
                </label>
                <br/>
                <label>
                    Rental Item Status: <input 
                    type="text" 
                    name="rental_item_status"
                    onChange={onChangeCreate} 
                    value={create_form.rental_item_status}
                    required/>
                </label>
                <br />
                <label>
                    Return Date: <input 
                    type="date" 
                    name="return_date"
                    onChange={onChangeCreate} 
                    value={create_form.return_date}
                    />
                </label>
                <br />
                <br />
                <input type="submit" value="Add Rental Item" required/>
            </fieldset>
          </form>
    )
}

