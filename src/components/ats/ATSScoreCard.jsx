import ProgressBar from '../common/ProgressBar'

export default function ATSScoreCard({ checks }) {
  return (
    <div className="glass rounded-[32px] p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-white">ATS Resume Score</h3>
          <p className="mt-1 text-sm text-slate-400">Optimized for recruiter systems and keyword matching.</p>
        </div>
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Overall</p>
          <p className="text-3xl font-bold text-white">84/100</p>
        </div>
      </div>
      <div className="mt-6 space-y-5">
        {checks.map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-200">{item.label}</span>
              <span className="text-slate-400">{item.score}%</span>
            </div>
            <ProgressBar value={item.score} />
          </div>
        ))}
      </div>
    </div>
  )
}
