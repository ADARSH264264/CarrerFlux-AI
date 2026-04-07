import AdminTableShell from '../common/AdminTableShell'
import StatusBadge from '../common/StatusBadge'

export default function RoadmapsTable({ roadmaps }) {
  return (
    <AdminTableShell>
      <table className="min-w-full text-left text-sm text-slate-300">
        <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-slate-400">
          <tr>
            <th className="px-5 py-4">Roadmap</th>
            <th className="px-5 py-4">Level</th>
            <th className="px-5 py-4">Modules</th>
            <th className="px-5 py-4">Duration</th>
            <th className="px-5 py-4">Status</th>
            <th className="px-5 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roadmaps.map((roadmap) => (
            <tr key={roadmap.id} className="border-t border-white/10">
              <td className="px-5 py-4 font-semibold text-white">{roadmap.title}</td>
              <td className="px-5 py-4">{roadmap.level}</td>
              <td className="px-5 py-4">{roadmap.modules}</td>
              <td className="px-5 py-4">{roadmap.duration}</td>
              <td className="px-5 py-4"><StatusBadge label={roadmap.status} /></td>
              <td className="px-5 py-4">
                <div className="flex flex-wrap gap-2">
                  <button className="rounded-full border border-white/10 px-3 py-1 text-xs text-white hover:bg-white/10">Preview</button>
                  <button className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">Edit</button>
                  <button className="rounded-full border border-rose-400/20 bg-rose-400/10 px-3 py-1 text-xs text-rose-300">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminTableShell>
  )
}
