import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState, useEffect } from 'react'; 
import Dropdown from "@/components/dropdown";
import usePost from '@/hooks/usePost'

export default function FormTransfersPost ( props: any ) {

    const {locator} = props;

    const apiTld = process.env.NEXT_PUBLIC_API_TLD;
    const apiUrl: string = `${apiTld}/${locator}`

    // make some controlled state for the form
    const [transfersFormPost, setTransfersForm] = useState({
        transfer_ID: "",
        source_library_ID: "",
        destination_library_ID: "",
        transfer_date: ""
    })

    const onChangeTransferAdd = useChange(transfersFormPost, setTransfersForm);
    const sendPost = usePost();
    const handleTransferAdd = useSubmit("", sendPost, {
        "url": apiUrl,
        "data": transfersFormPost
    });

    return (

        <form onSubmit={handleTransferAdd}>
            <fieldset>
                <legend> Add a Transfer Order </legend>
                <p>
                    Fill out the form below with the information of the new transfer
                </p>
                <label>
                    Source Library ID: <input 
                    type="number" 
                    name="source_library_ID" 
                    onChange={onChangeTransferAdd}
                    required
                    />
                </label>
                <br/>
                <label>
                    Destination Library ID: <input 
                    type="number" 
                    name="destination_library_ID" 
                    onChange={onChangeTransferAdd}
                    required
                    />
                </label>
                <br/>
                <label>
                    Transfer Date: <input 
                    type="date" 
                    name="transfer_date" 
                    onChange={onChangeTransferAdd}
                    required
                    />
                </label>
                <br />
                <br />
                <input type="submit" value="Add Transfer" required/>
            </fieldset>
          </form>
    )
}

