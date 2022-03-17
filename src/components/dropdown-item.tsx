export default function DropdownItem(props: any) {

    const {
        data,
        descriptor,
        id_descriptor
    } = props;
    const visual_value = data[descriptor];
    const actual_value = data[id_descriptor];
    
    return (
        <option value={actual_value}>
            {`${actual_value} | ${visual_value}`}
        </option>
    )
}