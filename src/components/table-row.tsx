import Link from "next/link"
import styles from '@/styles/Home.module.css'
import { v4 as uuidv4 } from 'uuid';
import UpdateButton from '@/components/button-update'
import DeleteButton from '@/components/button-delete'

export default function TableRow(props: any) {

    const {updater} = props
    const {affecter} = props
    const {apiUri} = props
    
    const renderRow = (rowData: any) => {
        const attributeArray: any = [];
        
        // create an array of the data
        // for the row
        for (const key in rowData) {
            attributeArray.push(rowData[key]);
        }
        
        const pathName = location.pathname;
        // for rentals and transfer pages
        if (pathName == "/rentals"){
            const rows: any = [];
            for (let i in attributeArray){
                let row = attributeArray[i];
                // linked ID
                if(i == "0"){
                    rows.push(
                        <td key={uuidv4()}>
                            <Link 
                            href={{ pathname: '/rental-items', query:{rental_ID: `${row}`} }}>
                                <a>{`${row}`}</a>
                            </Link>
                        </td>
                    );
                // get only date
                } else if(i == "3"){
                    rows.push(
                        <td key={uuidv4()}>
                            {`${row.split("T")[0]}`}
                        </td>
                    );
                } else{
                    rows.push(<td key={uuidv4()}>{`${row}`}</td>);
                }
            }
            return rows;
        // for every other page
        } else{
            // map the row data from array to component
            return attributeArray.map( (e: any) => {
                return <td key={uuidv4()}>{`${e}`}</td>
            });
        }
        
    };

    return (
        <tr>
            {renderRow(props.props)}
            <td><UpdateButton data={props.props} updater={updater}/></td>
            <td><DeleteButton data={props.props} affecter={affecter} apiUri={apiUri}/></td>
        </tr>
    )
}