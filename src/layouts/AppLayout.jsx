import Header from './Header'
import Footer from './Footer'

export default function AppLayout({ children }) {
    return (
        <div className="relative z-[1] max-w-[1200px] mx-auto px-6 pt-8 pb-16">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}