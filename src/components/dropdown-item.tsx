export default function DropdownItem(props: any) {

    const {
        data,
        descriptor,
        id_descriptor
    } = props;

    let visual_value = ""
    if (data[descriptor] === undefined) {
        visual_value = `${descriptor}`;
    }
    else {
        visual_value = data[descriptor];
    }

    const actual_value = data[id_descriptor];
    
    return (
        <option value={actual_value}>
            {`${actual_value} | ${visual_value}`}
        </option>
    )
}