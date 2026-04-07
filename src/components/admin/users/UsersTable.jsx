import AdminTableShell from '../common/AdminTableShell'
import StatusBadge from '../common/StatusBadge'

export default function UsersTable({ users }) {
  return (
    <AdminTableShell>
      <table className="min-w-full text-left text-sm text-slate-300">
        <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-slate-400">
          <tr>
            <th className="px-5 py-4">Student</th>
            <th className="px-5 py-4">Career Goal</th>
            <th className="px-5 py-4">Avg Score</th>
            <th className="px-5 py-4">Joined</th>
            <th className="px-5 py-4">Status</th>
            <th className="px-5 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t border-white/10">
              <td className="px-5 py-4">
                <p className="font-semibold text-white">{user.name}</p>
                <p className="mt-1 text-xs text-slate-400">{user.email}</p>
              </td>
              <td className="px-5 py-4">{user.goal}</td>
              <td className="px-5 py-4">{user.score}</td>
              <td className="px-5 py-4">{user.joined}</td>
              <td className="px-5 py-4"><StatusBadge label={user.status} /></td>
              <td className="px-5 py-4">
                <div className="flex flex-wrap gap-2">
                  <button className="rounded-full border border-white/10 px-3 py-1 text-xs text-white hover:bg-white/10">View</button>
                  <button className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">Edit</button>
                  <button className="rounded-full border border-rose-400/20 bg-rose-400/10 px-3 py-1 text-xs text-rose-300">Block</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminTableShell>
  )
}
