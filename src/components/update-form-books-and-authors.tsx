export default function UpdateFormBooksAndAuthors ( props: any ) {

    return (
        <form>
        <fieldset>
            <legend> Edit a Book-Author Connection </legend>
            <p>Books And Authors have a simple M:M relationship.</p>
            <p>If you want to edit the connection, just delete the one to edit
                and recreate it with the updated information.</p>
            <p>Ignore the UPDATE button in the table.  It does nothing 
                for Books {"&"} Authors.</p>
            <br/>
            <br />
        </fieldset>
        </form>
    )
}