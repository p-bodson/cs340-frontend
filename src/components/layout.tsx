import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Layout({ children }:any) {
    return (
        <>
        <NavBar />
        <main>{children}</main>
        <Footer />
        </>
    )
}