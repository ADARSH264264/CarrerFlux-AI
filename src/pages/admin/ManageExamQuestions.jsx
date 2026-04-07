import { Plus } from 'lucide-react'
import AdminSectionCard from '../../components/admin/common/AdminSectionCard'
import QuestionsTable from '../../components/admin/questions/QuestionsTable'
import { examQuestions } from '../../data/adminMockData'

export default function ManageExamQuestions() {
  return (
    <div className="space-y-6">
      <AdminSectionCard
        title="Manage Assessment Questions"
        copy="MCQ, coding, aptitude, and technical question banks are organized here for future CRUD API connection."
        action={<button className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950"><Plus className="mr-2 inline h-4 w-4" /> Add Question</button>}
      >
        <div className="mb-5 grid gap-4 md:grid-cols-4">
          {['Type Filter', 'Category Filter', 'Difficulty Filter', 'Marks Filter'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">{item}</div>
          ))}
        </div>
        <QuestionsTable rows={examQuestions} type="exam" />
      </AdminSectionCard>
    </div>
  )
}
