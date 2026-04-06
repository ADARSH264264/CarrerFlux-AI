export default function StatCard({ title, value, change }) {
  return (
    <div className="glass rounded-3xl p-5 shadow-glow">
      <p className="text-sm text-slate-400">{title}</p>
      <h3 className="mt-3 text-3xl font-bold text-white">{value}</h3>
      <p className="mt-2 text-sm text-emerald-300">{change}</p>
    </div>
  )
}
