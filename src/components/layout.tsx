import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from '@/styles/Home.module.css'

export default function Layout({ children }: any) {
    return (
        <>
        <NavBar />
        <p className={styles.important}>
            Please test website with Firefox or Chrome
        </p>
        <main>{children}</main>
        <Footer />
        </>
    )
}