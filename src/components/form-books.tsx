import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useState, useEffect } from 'react'; 
import Dropdown from "@/components/dropdown";
import usePost from '@/hooks/usePost'

export default function FormBooks ( props: any ) {

    const [books_form, setBooksForm] = props.stateStuff;
    const {apiUri} = props.apiUri

    // make some controlled state for the form
    const default_state = {
        isbn: "",
        book_title: ""
    }

    // handle changes to input from user
    const onChangeBookAdd = useChange(books_form, setBooksForm);
    const handleSubmit = (params: any) => {
        sendPost(params);
        setBooksForm(default_state)  
    }
    const sendPost = usePost();
    const handleBookAdd = useSubmit2("", handleSubmit,
        {        
            "url": apiUri,
            "data": books_form
        }
    );
    useEffect( () => {
        setBooksForm(default_state)
    }, [])

    return (

        <form onSubmit={handleBookAdd}>
            <fieldset>
                <legend> Add a New Book </legend>
                <p>Fill out the form below with the information of the new Book</p>
                <label>
                    ISBN: <input
                        type="text" 
                        name="isbn"
                        onChange={onChangeBookAdd}
                        value={books_form.isbn}
                        required
                    />
                </label>
                <br/>
                <label>
                    Title: <input 
                        type="text" 
                        name="book_title"
                        onChange={onChangeBookAdd}
                        value={books_form.book_title}
                        required
                    />
                </label>
                <br />
                <input type="submit" value="Add Book" required/>
            </fieldset>
          </form>
    )
}

