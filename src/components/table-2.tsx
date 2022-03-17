import Link from "next/link"
import styles from '@/styles/Home.module.css'
import TableRow from "@/components/table-row";
import { v4 as uuidv4 } from 'uuid';


export default function Table( props: any ) {
  const {data, isLoading, isError} = props;
  const {caption} = props;
  const {affect} = props;
  const {deleteUri} = props;
  const {update_form} = props

  const renderTableRows = (arrayData: Array<Object>, updater: any, affecter: any, apiUri:any) => {
    if (!arrayData) return null;
    if (!arrayData[0]) return null;
    return arrayData.map( e => <TableRow
      props={e}
      updater={updater}
      affecter={affecter}
      apiUri={apiUri}
      key={uuidv4()}
      />
    );
  };

  const renderTableHeaders = (arrayData: Array<Object>) => {
    // there needs to be at least one item in
    // arrayData for this to work. No error handling performed
    if (!arrayData) return <th>no data matches the criteria...</th>
    if (!arrayData[0]) return <th>no data matches the criteria...</th>
    const keys: any = Object.keys(arrayData[0]);
    return keys.map( (e: any) => {
      return <th key={uuidv4()}>{`${e}`}</th>
    });
  };

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Failed to load data</div>

    return (
      <div className="tables">
        <table>
          <caption>{caption}</caption>
          <thead>
            <tr>
              { renderTableHeaders(data) }
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { renderTableRows(data, update_form, affect, deleteUri) }
          </tbody>
        </table>
      </div>
    )
}