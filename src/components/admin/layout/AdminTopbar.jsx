import { Bell, Search, Sparkles } from 'lucide-react'

export default function AdminTopbar() {
  return (
    <div className="glass rounded-[32px] p-4 sm:p-5">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Smart Admin Workspace
          </span>
          <h1 className="mt-3 text-3xl font-bold text-white">Manage students, roadmaps, exams, and AI interview banks</h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-400">Frontend is prepared with scalable admin pages so backend CRUD, auth, analytics, and role-based access can be plugged in later.</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-400">
            <Search className="h-4 w-4" /> Search modules
          </div>
          <button className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10">
            <Bell className="h-4 w-4" /> Alerts
          </button>
          <button className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
            <Sparkles className="h-4 w-4" /> New Action
          </button>
        </div>
      </div>
    </div>
  )
}
