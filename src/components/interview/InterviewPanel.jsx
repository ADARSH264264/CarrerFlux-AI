export default function InterviewPanel({ questions }) {
  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <div key={index} className="glass rounded-3xl p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-300">{item.type}</span>
            <span className="text-xs text-slate-500">AI Adaptive Question</span>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-white">{item.question}</h3>
          <p className="mt-2 text-sm text-slate-400">Tip: {item.tip}</p>
          <div className="mt-4 rounded-2xl border border-dashed border-white/10 bg-slate-900/60 p-4 text-sm text-slate-500">
            Voice/video answer area placeholder for future backend integration.
          </div>
        </div>
      ))}
    </div>
  )
}
