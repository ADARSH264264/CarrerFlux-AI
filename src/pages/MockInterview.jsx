import SectionHeader from '../components/common/SectionHeader'
import InterviewPanel from '../components/interview/InterviewPanel'
import { interviewQuestions } from '../data/mockData'

export default function MockInterview() {
  return (
    <section className="container-pad py-14">
      <SectionHeader
        badge="AI Mock Interview Module"
        title="Practice technical and HR rounds with adaptive interview UI"
        copy="Students can simulate real interviews, receive AI-generated feedback, and improve communication and confidence."
      />
      <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <InterviewPanel questions={interviewQuestions} />
        <div className="glass rounded-[32px] p-6">
          <h3 className="text-2xl font-semibold text-white">Performance Feedback</h3>
          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Confidence: 8/10</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Technical Depth: 7/10</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Communication Clarity: 8.5/10</div>
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-100">
              Suggestion: Use more project-based examples and stronger problem-solving structure in answers.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
