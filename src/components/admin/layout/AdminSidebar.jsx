import { NavLink } from 'react-router-dom'
import { BriefcaseBusiness, LayoutDashboard, Users, Map, FileQuestion, MessageSquareQuote, ShieldCheck } from 'lucide-react'
import { cn } from '../../../utils/cn'

const links = [
  { to: '/admin/dashboard', label: 'Dashboard', Icon: LayoutDashboard },
  { to: '/admin/users', label: 'Manage Users', Icon: Users },
  { to: '/admin/roadmaps', label: 'Career Roadmaps', Icon: Map },
  { to: '/admin/exam-questions', label: 'Exam Questions', Icon: FileQuestion },
  { to: '/admin/interview-questions', label: 'Interview Questions', Icon: MessageSquareQuote },
]

export default function AdminSidebar() {
  return (
    <aside className="glass sticky top-6 hidden h-[calc(100vh-3rem)] rounded-[32px] p-5 lg:block">
      <div className="flex items-center gap-3 border-b border-white/10 pb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-slate-950">
          <BriefcaseBusiness className="h-5 w-5" />
        </div>
        <div>
          <p className="text-lg font-bold text-white">CareerFlux AI</p>
          <p className="text-xs text-slate-400">Admin Control Panel</p>
        </div>
      </div>

      <nav className="mt-6 space-y-2">
        {links.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition',
                isActive ? 'bg-white text-slate-950' : 'text-slate-300 hover:bg-white/10 hover:text-white'
              )
            }
          >
            <Icon className="h-4 w-4" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-8 rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-5 w-5 text-cyan-300" />
          <div>
            <p className="text-sm font-semibold text-white">Admin Access</p>
            <p className="text-xs text-slate-300">Role-based routes ready for backend auth.</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
