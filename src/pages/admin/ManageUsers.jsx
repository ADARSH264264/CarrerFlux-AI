import { Download, Plus, Search } from 'lucide-react'
import AdminSectionCard from '../../components/admin/common/AdminSectionCard'
import UsersTable from '../../components/admin/users/UsersTable'
import { adminUsers } from '../../data/adminMockData'

export default function ManageUsers() {
  return (
    <AdminSectionCard
      title="Manage Users"
      copy="View student profiles, track career goals, and prepare user management CRUD flows for backend integration."
      action={
        <div className="flex flex-wrap gap-3">
          <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white"> <Download className="mr-2 inline h-4 w-4" /> Export</button>
          <button className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950"> <Plus className="mr-2 inline h-4 w-4" /> Add User</button>
        </div>
      }
    >
      <div className="mb-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-400">
          <Search className="h-4 w-4" /> Search by name or email
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">Career Goal Filter</div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">Status Filter</div>
      </div>
      <UsersTable users={adminUsers} />
    </AdminSectionCard>
  )
}
