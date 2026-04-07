import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import AdminTopbar from './AdminTopbar'

export default function AdminLayout() {
  return (
    <section className="container-pad py-6">
      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <AdminSidebar />
        <div className="space-y-6">
          <AdminTopbar />
          <Outlet />
        </div>
      </div>
    </section>
  )
}
