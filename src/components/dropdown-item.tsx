import styles from '@/styles/Home.module.css'

export default function DropdownItem(props: any) {

    const {value_attribute} = props;
    const value = props.props[value_attribute];
    
    return (
        <option value={value}>{value}</option>
    )
}