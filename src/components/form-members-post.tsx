import useSubmit from '@/hooks/useSubmit'
import useChange from '@/hooks/useChange'
import { useState, useEffect } from 'react'; 
import usePost from '@/hooks/usePost'

export default function FormMembersPost ( props: any ) {

    const {locator} = props;

    const apiTld = process.env.NEXT_PUBLIC_API_TLD;
    const apiUrl: string = `${apiTld}/${locator}`

    // make some controlled state for the form
    const [membersFormPost, setMembersForm] = useState({
        member_ID: "",
        member_first_name: "",
        member_last_name: "",
        member_phone: ""
    })

    const onChangeMemberAdd = useChange(membersFormPost, setMembersForm);
    const sendPost = usePost();
    const handleMemberAdd = useSubmit("", sendPost, {
        "url": apiUrl,
        "data": membersFormPost
    });

    return (

        <form onSubmit={handleMemberAdd}>
            <fieldset>
                <legend> Add a New Member </legend>
                <p>
                    Fill out the form below with the information of the new member
                </p>
                <label>
                    First Name: <input 
                    type="text" 
                    name="member_first_name" 
                    onChange={onChangeMemberAdd}
                    required/>
                </label>
                <br/>
                <label>
                    Last Name: <input 
                    type="text" 
                    name="member_last_name" 
                    onChange={onChangeMemberAdd}
                    required/>
                </label>
                <br/>
                <label>
                    Phone Number: <input 
                    type="number" 
                    name="member_phone" 
                    onChange={onChangeMemberAdd}
                    required/>
                </label>
                <br />
                <br />
                <input type="submit" value="Add Member" required/>
            </fieldset>
          </form>
    )
}

