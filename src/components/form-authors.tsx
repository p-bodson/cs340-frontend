import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState, useEffect } from 'react';
import usePost from '@/hooks/usePost'



export default function FormAuthors ( props: any ) {

    const {locator} = props;

    const apiTld = process.env.NEXT_PUBLIC_API_TLD;
    const apiUrl: string = `${apiTld}/${locator}`

    // make some controlled state for the form
    const [authors_form, setAuthorsForm] = useState({
        author_name: "",
    })

    const onChangeAuthorAdd = useChange(authors_form, setAuthorsForm);
    const sendPost = usePost();
    const handleAuthorAdd = useSubmit("", sendPost, {
        "url": apiUrl,
        "data": authors_form
    });

    return (
        <form onSubmit={handleAuthorAdd}>
        <fieldset>
            <legend> Add a New Author </legend>
            <p>Fill out the form below with the information of the new Author</p>
            <label>
                Name: <input 
                    type="text" 
                    name="author_name"
                    onChange={onChangeAuthorAdd}
                    required
                />
            </label>
            <br/>
            <br />
            <input type="submit" value="Add Author" required/>
        </fieldset>
        </form>
    )
}