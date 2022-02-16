import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Members: NextPage = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>Members</title>
          <meta name="description" content="members page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>

          <h1 className={styles.title}>Members</h1>
          <p>Welcome to the Members page</p>

          <form>
            <fieldset>
                <legend> Find Super Duper Library Network Members </legend>
                <p>Fill out zero or more of the fields below to find matching members</p>
                <label>
                    Member ID: <input type="number" name="member_ID"/>
                </label>
                <br/>
                <label>
                    Member First Name: <input type="text" name="member_first_name" />
                </label>
                <br/>
                <label>
                    Member Last Name: <input type="text" name="member_last_name" />
                </label>
                <br/>
                <label>
                    Member Phone Number: <input type="number" name="member_phone" />
                </label>
                <br />
                <br />
                <input type="submit" value="Search" />
            </fieldset>
            <br />
            <fieldset>
                <legend> Add a New Member </legend>
                <p>Fill out the form below with the information of the new member</p>
                <label>
                    First Name: <input type="text" name="member_first_name_add" required/>
                </label>
                <br/>
                <label>
                    Last Name: <input type="text" name="member_last_name_add" required/>
                </label>
                <br/>
                <label>
                    Phone Number: <input type="number" name="member_phone_add" required/>
                </label>
                <br />
                <br />
                <input type="submit" value="Add Member" />
            </fieldset>
          </form>
          <br />
          <table>
              <caption><b>Members</b></caption>
              <thead>
                <tr>
                  <th>member_ID</th>
                  <th>member_first_name</th>
                  <th>member_last_name</th>
                  <th>member_phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>8008675309</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane</td>
                  <td>Doe</td>
                  <td>8005550840</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Gene</td>
                  <td>Parmesan</td>
                  <td>8005550113</td>
                </tr>
              </tbody>
          </table>

        </main>
  
      </div>
    )
  }
  
  export default Members