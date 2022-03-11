import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState, useEffect } from 'react'; 
import usePost from '@/hooks/usePost'

export default function FormLibrariesPost ( props: any ) {

    const {locator} = props;

    const apiTld = process.env.NEXT_PUBLIC_API_TLD;
    const apiUrl: string = `${apiTld}/${locator}`

    // make some controlled state for the form
    const [librariesFormPost, setLibrariesForm] = useState({
        library_ID: "",
        library_name: "",
        library_address: ""
    })

    const onChangeLibraryAdd = useChange(librariesFormPost, setLibrariesForm);
    const sendPost = usePost();
    const handleLibraryAdd = useSubmit("", sendPost, {
        "url": apiUrl,
        "data": librariesFormPost
    });

    return (

        <form onSubmit={handleLibraryAdd}>
            <fieldset>
                <legend> Add a New Library </legend>
                <p>
                    Fill out the form below with the information of the new library
                </p>
                <label>
                    Name: <input 
                    type="text" 
                    name="library_name" 
                    onChange={onChangeLibraryAdd}
                    required
                    />
                </label>
                <br/>
                <label>
                    Address: <input 
                    type="text" 
                    name="library_address"
                    onChange={onChangeLibraryAdd} 
                    required
                    />
                </label>
                <br/>
                <br />
                <input type="submit" value="Add Library" required/>
            </fieldset>
        </form>
    )
}

