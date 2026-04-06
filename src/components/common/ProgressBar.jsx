export default function ProgressBar({ value }) {
  return (
    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
      <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500" style={{ width: `${value}%` }} />
    </div>
  )
}
