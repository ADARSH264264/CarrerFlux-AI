export default function RoleCard({ role }) {
  return (
    <div className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-cyan-400/30">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-white">{role.title}</h3>
          <p className="mt-2 text-sm text-cyan-300">{role.level}</p>
        </div>
        <button className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200">Select</button>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{role.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {role.skills.map((skill) => (
          <span key={skill} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{skill}</span>
        ))}
      </div>
    </div>
  )
}
