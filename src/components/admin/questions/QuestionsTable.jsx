import AdminTableShell from '../common/AdminTableShell'
import StatusBadge from '../common/StatusBadge'

export default function QuestionsTable({ rows, type = 'exam' }) {
  return (
    <AdminTableShell>
      <table className="min-w-full text-left text-sm text-slate-300">
        <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-slate-400">
          <tr>
            <th className="px-5 py-4">Question</th>
            <th className="px-5 py-4">Category</th>
            <th className="px-5 py-4">Difficulty</th>
            <th className="px-5 py-4">Meta</th>
            <th className="px-5 py-4">Status</th>
            <th className="px-5 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-white/10 align-top">
              <td className="px-5 py-4">
                <p className="font-semibold text-white">{row.question}</p>
                <p className="mt-1 text-xs text-slate-500">{row.id}</p>
              </td>
              <td className="px-5 py-4">{row.category}</td>
              <td className="px-5 py-4">{row.difficulty}</td>
              <td className="px-5 py-4">
                {type === 'exam' ? `${row.type} • ${row.marks} marks` : `${row.role}`}
              </td>
              <td className="px-5 py-4"><StatusBadge label={type === 'exam' ? 'Active' : row.status} /></td>
              <td className="px-5 py-4">
                <div className="flex flex-wrap gap-2">
                  <button className="rounded-full border border-white/10 px-3 py-1 text-xs text-white hover:bg-white/10">View</button>
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
