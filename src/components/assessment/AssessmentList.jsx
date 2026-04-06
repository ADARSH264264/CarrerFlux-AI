const assessments = [
  ['MCQ Test', '25 questions', 'Intermediate'],
  ['Coding Round', '3 tasks', 'Role-based'],
  ['Scenario Challenge', '5 prompts', 'Critical thinking'],
  ['Aptitude Sprint', '20 minutes', 'Timed test'],
]

export default function AssessmentList() {
  return (
    <div className="space-y-4">
      {assessments.map(([title, meta, level]) => (
        <div key={title} className="glass flex flex-col gap-4 rounded-3xl p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm text-slate-400">{meta}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{level}</span>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950">Start Test</button>
          </div>
        </div>
      ))}
    </div>
  )
}
