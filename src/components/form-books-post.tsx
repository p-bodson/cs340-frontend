import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect } from 'react'; 
import usePost from '@/hooks/usePost'
import useGet from '@/hooks/useGet'

export default function FormBooks ( props: any ) {

    const [create_form, setCreateForm] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props

    // make some controlled state for the form
    const default_state = {
        isbn: "",
        book_title: ""
    }

    // handle changes to input from user
    const onChangeBookAdd = useChange(create_form, setCreateForm);
    const handleSubmit = async (params: any) => {  
        await sendPost(params);
        setCreateForm(default_state)
        const data = await sendGet(params);
        affect(data)
    }

    const sendPost = usePost();
    const sendGet = useGet();
    const handleBookAdd = useSubmit2(handleSubmit,
        {        
            "url": apiUri,
            "data": create_form
        }
    );
    useEffect( () => {
        setCreateForm(default_state)
    }, [])

    return (

        <form onSubmit={handleBookAdd}>
            <fieldset>
                <legend> Add a New Book </legend>
                <p>Fill out the form below with the information of the new book</p>
                <label>
                    ISBN: <input
                        type="text" 
                        name="isbn"
                        onChange={onChangeBookAdd}
                        value={create_form.isbn}
                        required
                    />
                </label>
                <br/>
                <label>
                    Title: <input 
                        type="text" 
                        name="book_title"
                        onChange={onChangeBookAdd}
                        value={create_form.book_title}
                        required
                    />
                </label>
                <br/>
                <br/>
                <input type="submit" value="Add Book" required/>
            </fieldset>
          </form>
    )
}

