import Link from "next/link"
import styles from '@/styles/Home.module.css'
import DropdownItem from "@/components/dropdown-item";
import { v4 as uuidv4 } from 'uuid';
import useData from '@/hooks/useData';
import { useState, useEffect} from 'react'


export default function Dropdown( props: any ) {
  const {
    apiUri,
    name,
    descriptor,
    value,
    onChange,
    setter,
    form_data
  } = props;

  const { data, isLoading, isError } = useData(apiUri);

  const [dropdown_data, setData] = useState([]);

  useEffect( () => {
    setData(data);
  }, [data, isLoading, isError])

  useEffect( () => {
    console.log(value);
    if (data !== undefined) {
      const value = data[0][name];
      setter({
        ...form_data, 
        [name]: value
      })
    }
  }, [value, name, data, isLoading, isError])


  const renderDropdownItems = (arrayData: Array<Object>) => {
    if (!arrayData) return null;
    if (!arrayData[0]) return null;
    return arrayData.map( e => <DropdownItem
      data={e}
      key={uuidv4()}
      descriptor={descriptor}
      id_descriptor={name}
      />
    );
  };

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Failed to load data</div>

    return (
        <select 
          name={name}
          value={value}
          onChange={onChange}>
            {renderDropdownItems(dropdown_data)}
        </select>
    )
}