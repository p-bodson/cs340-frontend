import useGet from '@/hooks/useGet'
import useDelete from '@/hooks/useDelete'
import useSubmit2 from '@/hooks/useSubmit-2'

export default function DeleteButton (props: any) {

    // get the object containg the row data
    // and the state changer and 
    const { data, affecter, apiUri } = props
    const sendDelete = useDelete();
    const sendGet = useGet();

    // and handle the button submission
    const handleSubmit = async (params: any) => {  
        // send the request
        await sendDelete(params);
        // update the date displayed on the table
        const data = await sendGet(params);
        affecter(data);
    }

    const handleDelete = useSubmit2( handleSubmit,
        {        
            "url": apiUri,
            "data": data
        }
    );

    return (

        <button onClick={handleDelete}> DELETE </button>
    
    )
}
