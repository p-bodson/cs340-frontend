import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState, useEffect } from 'react'; 
import Dropdown from "@/components/dropdown";
import usePost from '@/hooks/usePost'

export default function FormRentalsPost ( props: any ) {

    const {locator} = props;

    const apiTld = process.env.NEXT_PUBLIC_API_TLD;
    const apiUrl: string = `${apiTld}/${locator}`

    // make some controlled state for the form
    const [rentalsFormPost, setRentalsForm] = useState({
        rental_ID: "",
        source_library_ID: "",
        destination_library_ID: "",
        rental_date: ""
    })

    const onChangeRentalAdd = useChange(rentalsFormPost, setRentalsForm);
    const sendPost = usePost();
    const handleRentalAdd = useSubmit("", sendPost, {
        "url": apiUrl,
        "data": rentalsFormPost
    });

    return (

        <form onSubmit={handleRentalAdd}>
            <fieldset>
                <legend> Add a Rental Order </legend>
                <p>
                    Fill out the form below with the information of the new rental.
                    Refresh page after pressing <i>Add Rental</i> to see updated table.
                </p>
                <label>
                    Member ID: <input 
                    type="number" 
                    name="member_ID"
                    onChange={onChangeRentalAdd} 
                    required/>
                </label>
                <br/>
                <label>
                    Library ID: <input 
                    type="number" 
                    name="library_ID"
                    onChange={onChangeRentalAdd} 
                    required/>
                </label>
                <br/>
                <label>
                    Rental Date: <input 
                    type="date" 
                    name="rental_date"
                    onChange={onChangeRentalAdd} 
                    required/>
                </label>
                <br />
                <br />
                <input type="submit" value="Add Rental" required/>
            </fieldset>
          </form>
    )
}

