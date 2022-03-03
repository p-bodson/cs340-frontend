import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState } from 'react';
import usePost from '@/hooks/usePost'

export default function FormAuthor ( props: any ) {
    const {locator} = props;

    const apiTld = process.env.NEXT_PUBLIC_API_TLD;
    const apiUrl: string = `${apiTld}/${locator}`

    // make some controlled state for the form
    const [author_form, setAuthorForm] = useState({
        author_name: "",
    })

    const onChangeAuthorAdd = useChange(author_form, setAuthorForm);
    const sendPost = (args: any) => {
        const {url, data} = args;
                
        const options: Object = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        const fetcher = async (url: any, options: any) => {
            const response = await fetch(url, options);
            const payload = await response.json();
            return payload;
        }

        return fetcher(url, data);
    };

    console.log(sendPost({
        "url": apiUrl,
        "data": author_form
    }))


    const handleAuthorAdd = useSubmit("", () => {}, {
        "url": apiUrl,
        "data": author_form
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