import Navbar from './Navbar'
import Footer from './Footer'

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 bg-grid-pattern [background-size:24px_24px]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
