import DropdownItem from "@/components/dropdown-item";
import { v4 as uuidv4 } from 'uuid';


export default function Dropdown( props: any ) {
  const {
    name,
    descriptor,
    value,
    options,
    onChange,
  } = props;


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

  return (
      <select 
        name={name}
        value={value}
        onChange={onChange}>
          {renderDropdownItems(options)}
      </select>
  )
}