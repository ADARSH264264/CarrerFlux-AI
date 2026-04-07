import { Plus } from 'lucide-react'
import AdminSectionCard from '../../components/admin/common/AdminSectionCard'
import RoadmapsTable from '../../components/admin/roadmaps/RoadmapsTable'
import { adminRoadmaps } from '../../data/adminMockData'

export default function ManageRoadmaps() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <AdminSectionCard
        title="Manage Career Roadmaps"
        copy="Create, update, publish, and organize role-wise learning paths for students."
        action={<button className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950"><Plus className="mr-2 inline h-4 w-4" /> New Roadmap</button>}
      >
        <RoadmapsTable roadmaps={adminRoadmaps} />
      </AdminSectionCard>

      <AdminSectionCard title="Roadmap Builder" copy="Preview future backend form fields from the admin frontend side.">
        <div className="space-y-4 text-sm">
          {['Career Title', 'Description', 'Level', 'Duration', 'Modules / Steps', 'Resources / Projects'].map((field) => (
            <div key={field} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300">{field}</div>
          ))}
          <button className="w-full rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 font-semibold text-cyan-300">Save Draft</button>
        </div>
      </AdminSectionCard>
    </div>
  )
}
