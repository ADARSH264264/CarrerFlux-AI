export default function AuthCard({ title, subtitle, children, sideTitle, sideCopy }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="glass rounded-[32px] p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <p className="mt-3 text-sm text-slate-400">{subtitle}</p>
        <div className="mt-8 space-y-4">{children}</div>
      </div>
      <div className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 via-indigo-500/10 to-fuchsia-500/10 p-8">
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Smart Career Companion
        </span>
        <h2 className="mt-5 text-3xl font-bold text-white">{sideTitle}</h2>
        <p className="mt-4 text-sm leading-7 text-slate-300">{sideCopy}</p>
      </div>
    </div>
  )
}
