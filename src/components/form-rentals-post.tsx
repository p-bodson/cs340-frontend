import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react'; 
import usePost from '@/hooks/usePost'
import useGet from '@/hooks/useGet'
import Dropdown from "@/components/dropdown"


export default function FormRentalsPost ( props: any ) {

    const [create_form, setCreateForm] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props
    const {membersDD} = props
    const {librariesDD} = props
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
                <legend> Add a Rental </legend>
                <p>
                    Fill out the form below with the information of the new rental
                </p>
                <label>
                    Member ID: <Dropdown
                        name={"member_ID"}
                        onChange={onChangeCreate}
                        value={create_form.member_ID}
                        descriptor={"member_first_name"}
                        options={membersDD}
                    />
                </label>
                <br/>
                <label>
                    Library ID: <Dropdown
                        name={"library_ID"}
                        onChange={onChangeCreate}
                        value={create_form.library_ID}
                        descriptor={"library_name"}
                        options={librariesDD}
                    />
                </label>
                <br/>
                <label>
                    Rental Date: <input 
                    type="date" 
                    name="rental_date"
                    onChange={onChangeCreate}
                    value={create_form.rental_date}
                    required/>
                </label>
                <br />
                <br />
                <input type="submit" value="Add Rental" required/>
            </fieldset>
          </form>
    )
}

