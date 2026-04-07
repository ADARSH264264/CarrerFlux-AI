export default function AdminTableShell({ children }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/40">
      <div className="overflow-x-auto">{children}</div>
    </div>
  )
}
