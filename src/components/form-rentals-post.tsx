import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react'; 
import Dropdown from "@/components/dropdown";
import usePost from '@/hooks/usePost'
import useGet from '@/hooks/useGet'


export default function FormRentalsPost ( props: any ) {

    const [create_form, setCreateForm] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props

    const default_state = {
        rental_ID: "",
        member_ID: "",
        library_ID: "",
        rental_date: ""
    }


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
    }, [])

    return (

        <form onSubmit={handleCreate}>
            <fieldset>
                <legend> Add a Rental Order </legend>
                <p>
                    Fill out the form below with the information of the new rental
                </p>
                <label>
                    Member ID: <input 
                    type="number" 
                    name="member_ID"
                    onChange={onChangeCreate} 
                    required/>
                </label>
                <br/>
                <label>
                    Library ID: <input 
                    type="number" 
                    name="library_ID"
                    onChange={onChangeCreate} 
                    required/>
                </label>
                <br/>
                <label>
                    Rental Date: <input 
                    type="date" 
                    name="rental_date"
                    onChange={onChangeCreate} 
                    required/>
                </label>
                <br />
                <br />
                <input type="submit" value="Add Rental" required/>
            </fieldset>
          </form>
    )
}

