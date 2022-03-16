import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import usePost from '@/hooks/usePost'

export default function FormTransferItemsPost ( props: any ) {

    const {locator} = props;
    const router = useRouter();
    const transferID = router.query.transfer_ID;

    const apiTld = process.env.NEXT_PUBLIC_API_TLD;
    const apiUrl: string = `${apiTld}/${locator}`

    // make some controlled state for the form
    const [transferItemsFormPost, setTransferItemsForm] = useState({
        transfer_ID: transferID,
        resource_ID: "",
        quantity: "",
        transfer_item_status: ""
    })

    const onChangeTransferItemAdd = useChange(transferItemsFormPost, setTransferItemsForm);
    const sendPost = usePost();
    const handleTransferItemAdd = useSubmit(router.asPath, sendPost, {
        "url": apiUrl,
        "data": transferItemsFormPost
    });

    return (

        <form onSubmit={handleTransferItemAdd}>
            <fieldset>
                <legend> Add a New Transfer Item </legend>
                <p>
                    Fill out the form below with the information of the new transfer item to add to this transfer
                </p>
                {/* <label>
                    Transfer ID: <input 
                    type="number" 
                    name="transfer_ID"
                    onChange={onChangeTransferItemAdd}
                    required/>
                </label>
                <br/> */}
                <label>
                    Resource ID: <input 
                    type="number" 
                    name="resource_ID" 
                    onChange={onChangeTransferItemAdd}
                    required/>
                </label>
                <br/>
                <label>
                    Quantity: <input 
                    type="number" 
                    name="quantity" 
                    onChange={onChangeTransferItemAdd}
                    required/>
                </label>
                <br/>
                <label>
                    Transfer Item Status: <input 
                    type="text" 
                    name="transfer_item_status" 
                    onChange={onChangeTransferItemAdd}
                    required/>
                </label>
                <br/>
                <br />
                <input type="submit" value="Add Transfer Item" required/>
            </fieldset>
          </form>
    )
}

