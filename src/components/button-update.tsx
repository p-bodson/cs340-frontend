
export default function UpdateButton (props: any) {

    // get the object containg the row data
    // and the form updater
    const { data, updater } = props

    // fill in the form data with the row data
    const updateForm = () => {
        updater(data);
    }

    return (

        <button onClick={updateForm}> UPDATE </button>
    
    )
}