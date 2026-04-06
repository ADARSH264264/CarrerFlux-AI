import SectionHeader from '../components/common/SectionHeader'
import AssessmentList from '../components/assessment/AssessmentList'

export default function Assessment() {
  return (
    <section className="container-pad py-14">
      <SectionHeader
        badge="Skill Assessment and Exam"
        title="Evaluate skill gaps using quizzes, coding tasks, and scenario-based tests"
        copy="This page is designed for online exams, role-based practice, and future result analytics integration."
      />
      <div className="mt-10">
        <AssessmentList />
      </div>
    </section>
  )
}
