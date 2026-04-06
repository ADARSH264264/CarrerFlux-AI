export default function SectionHeader({ badge, title, copy }) {
  return (
    <div className="max-w-3xl">
      {badge ? (
        <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {badge}
        </span>
      ) : null}
      <h2 className="section-title mt-4">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  )
}
