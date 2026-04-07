import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function AppShell({ children }) {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <div className="min-h-screen bg-slate-950 bg-grid-pattern [background-size:24px_24px]">
      {!isAdminRoute ? <Navbar /> : null}
      <main>{children}</main>
      {!isAdminRoute ? <Footer /> : null}
    </div>
  )
}
