import useSubmit2 from '@/hooks/useSubmit-2'
import useChange from '@/hooks/useChange'
import { useEffect, useState } from 'react'; 
import Dropdown from "@/components/dropdown";
import usePost from '@/hooks/usePost'
import useGet from '@/hooks/useGet'


export default function FormBooksAndAuthorsPost ( props: any ) {

    const [create_form, setCreateForm] = props.stateStuff;
    const {apiUri} = props
    const {affect} = props
    const {authorsDD} = props
    const {booksDD} = props
    const {default_state} = props;

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
    const handleCreate = useSubmit2(handleSubmit,
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
                <legend> Connect Books with Authors </legend>
                <p>Fill out the form below with the information of the connection</p>
                <label>
                    ISBN:<Dropdown
                        name={"isbn"}
                        onChange={onChangeCreate}
                        value={create_form.isbn}
                        descriptor={"book_title"}
                        options={booksDD}
                    />
                </label>
                <br/>
                <label>
                    Author ID:<Dropdown
                        name={"author_ID"}
                        onChange={onChangeCreate}
                        value={create_form.author_ID}
                        descriptor={"author_name"}
                        options={authorsDD}
                    />
                </label>
                <br />
                <input type="submit" value="Add Connection" required/>
            </fieldset>
          </form>
    )
}
