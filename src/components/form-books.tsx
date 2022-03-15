import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState, useEffect } from 'react'; 
import Dropdown from "@/components/dropdown";
import usePost from '@/hooks/usePost'

export default function FormBooks ( props: any ) {

    const {locator} = props;
    const [books_form, setBooksForm] = props.stateStuff;

    const apiTld = process.env.NEXT_PUBLIC_API_TLD;
    const apiUrl: string = `${apiTld}/${locator}`



    const onChangeBookAdd = useChange(books_form, setBooksForm);
    const sendPost = usePost();
    const handleBookAdd = useSubmit("", sendPost, {
        "url": apiUrl,
        "data": books_form
    });

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
                        required
                    />
                </label>
                <br/>
                <label>
                    Title: <input 
                        type="text" 
                        name="book_title"
                        onChange={onChangeBookAdd}
                        required
                    />
                </label>
                <br/>
                <label>
                    Author ID: {" "}
                    <Dropdown 
                      name="book_author_add"
                      locator="authors"
                      value_attribute="author_ID"
                    />
                </label>
                <br/>
                <br />
                <input type="submit" value="Add Book" required/>
            </fieldset>
          </form>
    )
}

