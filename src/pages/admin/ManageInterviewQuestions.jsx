import { Plus } from 'lucide-react'
import AdminSectionCard from '../../components/admin/common/AdminSectionCard'
import QuestionsTable from '../../components/admin/questions/QuestionsTable'
import { interviewQuestions } from '../../data/adminMockData'

export default function ManageInterviewQuestions() {
  return (
    <div className="space-y-6">
      <AdminSectionCard
        title="Manage Interview Questions"
        copy="Technical, HR, and behavioral prompts are ready for the mock interview module and AI feedback workflows."
        action={<button className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950"><Plus className="mr-2 inline h-4 w-4" /> Add Interview Prompt</button>}
      >
        <div className="mb-5 grid gap-4 md:grid-cols-4">
          {['Category Filter', 'Role Filter', 'Difficulty Filter', 'Status Filter'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">{item}</div>
          ))}
        </div>
        <QuestionsTable rows={interviewQuestions} type="interview" />
      </AdminSectionCard>
    </div>
  )
}
