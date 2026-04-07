export default function AdminStatCard({ title, value, change }) {
  return (
    <div className="glass rounded-[28px] p-5 shadow-glow transition hover:-translate-y-1 hover:border-cyan-400/30">
      <p className="text-sm text-slate-400">{title}</p>
      <h3 className="mt-3 text-3xl font-bold text-white">{value}</h3>
      <p className="mt-3 text-sm text-cyan-300">{change}</p>
    </div>
  )
}
