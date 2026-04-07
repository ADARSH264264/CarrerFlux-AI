export default function AdminSectionCard({ title, copy, action, children }) {
  return (
    <div className="glass rounded-[32px] p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          {copy ? <p className="mt-2 text-sm text-slate-400">{copy}</p> : null}
        </div>
        {action}
      </div>
      <div className="mt-6">{children}</div>
    </div>
  )
}
