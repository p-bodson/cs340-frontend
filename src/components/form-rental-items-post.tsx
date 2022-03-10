import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState, useEffect } from 'react'; 
import usePost from '@/hooks/usePost'

export default function FormRentalItemsPost ( props: any ) {

    const {locator} = props;

    const apiTld = process.env.NEXT_PUBLIC_API_TLD;
    const apiUrl: string = `${apiTld}/${locator}`

    // make some controlled state for the form
    const [rentalItemsFormPost, setRentalItemsForm] = useState({
        rental_ID: "",
        resource_ID: "",
        queue_numb: "",
        rental_item_status: "",
        return_date: ""
    })

    const onChangeRentalItemAdd = useChange(rentalItemsFormPost, setRentalItemsForm);
    const sendPost = usePost();
    const handleRentalItemAdd = useSubmit("", sendPost, {
        "url": apiUrl,
        "data": rentalItemsFormPost
    });

    return (

        <form onSubmit={handleRentalItemAdd}>
            <fieldset>
                <legend> Add a New Member </legend>
                <p>
                    Fill out the form below with the information of the new member
                </p>
                <label>
                    Resource ID: <input 
                    type="number" 
                    name="resource_ID" 
                    onChange={onChangeRentalItemAdd}
                    required/>
                </label>
                <br/>
                <label>
                    Queue Number: <input 
                    type="number" 
                    name="queue_numb" 
                    onChange={onChangeRentalItemAdd}
                    required/>
                </label>
                <br/>
                <label>
                    Rental Item Status: <input 
                    type="text" 
                    name="rental_item_status" 
                    onChange={onChangeRentalItemAdd}
                    required/>
                </label>
                <br/>
                <label>
                    Return Date: <input 
                    type="date" 
                    name="return_date" 
                    onChange={onChangeRentalItemAdd}/>
                </label>
                <br />
                <br />
                <input type="submit" value="Add Rental Item" required/>
            </fieldset>
          </form>
    )
}

