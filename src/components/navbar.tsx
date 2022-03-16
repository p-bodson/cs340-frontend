import Link from "next/link"
import styles from '@/styles/Home.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navigation}>
            <ol>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/members">
                  <a>Members</a>
                </Link>
              </li>
              <li>
                <Link href="/libraries">
                  <a>Libraries</a>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <a>Resources</a>
                </Link>
              </li>
              <li>
                <Link href="/books-and-authors">
                  <a>Books {'&'} Authors</a>
                </Link>
              </li>
              <li>
                <Link href="/rentals">
                  <a>Rentals</a>
                </Link>
              </li>
            </ol>
        </nav>
    )

}