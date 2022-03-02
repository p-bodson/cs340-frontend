import Link from "next/link"
import styles from '@/styles/Home.module.css'
import { v4 as uuidv4 } from 'uuid';

export default function TableRow(props: any) {
    
    const renderRow = (rowData: any) => {
        const attributeArray: any = [];

        for (const key in rowData) {
            attributeArray.push(rowData[key]);
        }

        return attributeArray.map( (e: any) => {
            return <td key={uuidv4()}>{`${e}`}</td>
        });
    };

    return (
        <tr>
            {renderRow(props.props)}
            <td><button>UPDATE</button></td>
            <td><button>DELETE</button></td>
        </tr>
    )
}