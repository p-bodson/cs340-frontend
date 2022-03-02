import Link from "next/link"
import styles from '@/styles/Home.module.css'
import DropdownItem from "@/components/dropdown-item";
import { v4 as uuidv4 } from 'uuid';
import useData from '@/hooks/useData';


export default function Dropdown( props: any ) {
  const {locator} = props;
  const {name} = props;
  const {value_attribute} = props;

  const apiTld = process.env.NEXT_PUBLIC_API_TLD;
  const apiUrl: string = `${apiTld}/${locator}`
  const { data, isLoading, isError } = useData(apiUrl);

  const renderDropdownItems = (arrayData: Array<Object>) => {
    return arrayData.map( e => <DropdownItem
      props={e}
      key={uuidv4()}
      value_attribute={value_attribute}
      />
    );
  };

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Failed to load data</div>

    return (
        <select name={name}>
            {renderDropdownItems(data)}
        </select>
    )
}