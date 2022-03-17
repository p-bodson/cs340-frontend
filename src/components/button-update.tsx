
export default function UpdateButton (props: any) {

    // get the object containg the row data
    // and the form updater
    const { data, updater } = props

    // fill in the form data with the row data
    const updateForm = () => {
        if (!updater) return;
        
        // turn any null values into empty strings
        for (let property in data) {
            if (data[property] === null) {
                data[property] = "";
            }
        }
        updater(data);
    }

    return (

        <button onClick={updateForm}> UPDATE </button>
    
    )
}