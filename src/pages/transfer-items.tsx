import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FormTransferItems from '@/components/form-transfer-items'
import FormTransferItemsPost from '@/components/form-transfer-items-post'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Table from '@/components/table'

const TransferItems: NextPage = () => {

  const router = useRouter();
  const transfer_items_path_root = router.asPath.replace('/','')
  const [transfer_items_path, setTransferItemsPath] = useState(transfer_items_path_root)
  
    return (
      <div className={styles.container}>
        <Head>
          <title>Transfer Items</title>
          <meta name="description" content="transfer items page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Transfer Items</h1>
          <p>Welcome to the Transfer Items page</p>

          <FormTransferItems 
            locator={transfer_items_path_root}
            setPath={setTransferItemsPath}
          />
          <br />
          <FormTransferItemsPost
            locator={transfer_items_path_root}
          />
          <br />
          <Table 
            locator={transfer_items_path}
            caption={<b>Transfer Items</b>}
          />

        </main>
  
      </div>
    )
  }
  
  export default TransferItems