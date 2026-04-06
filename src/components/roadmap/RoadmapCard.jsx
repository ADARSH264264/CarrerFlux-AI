import ProgressBar from '../common/ProgressBar'

export default function RoadmapCard({ phase }) {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{phase.duration}</p>
        </div>
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          {phase.progress}% complete
        </span>
      </div>
      <ProgressBar value={phase.progress} />
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {phase.topics.map((topic) => (
          <div key={topic} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
            {topic}
          </div>
        ))}
      </div>
    </div>
  )
}
