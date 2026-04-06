import SectionHeader from '../components/common/SectionHeader'
import ATSScoreCard from '../components/ats/ATSScoreCard'
import { atsChecks } from '../data/mockData'

export default function ATSChecker() {
  return (
    <section className="container-pad py-14">
      <SectionHeader
        badge="ATS Resume Score Checker"
        title="Analyze keyword quality, structure, and recruiter system compatibility"
        copy="This UI is ready for resume upload parsing and AI suggestions once backend integration begins."
      />
      <div className="mt-10 grid gap-6 xl:grid-cols-[1fr_0.85fr]">
        <ATSScoreCard checks={atsChecks} />
        <div className="glass rounded-[32px] p-6">
          <h3 className="text-2xl font-semibold text-white">Improvement Suggestions</h3>
          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Add more role-specific keywords like React, Redux, REST API, and performance optimization.</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Rewrite project bullets using action verbs and measurable impact.</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Ensure one-column layout and clean heading hierarchy for ATS parsing.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
