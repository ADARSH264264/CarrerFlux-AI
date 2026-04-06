import SectionHeader from '../components/common/SectionHeader'
import ResumePreview from '../components/resume/ResumePreview'
import InputField from '../components/common/InputField'
import { resumeSections } from '../data/mockData'

export default function ResumeBuilder() {
  return (
    <section className="container-pad py-14">
      <SectionHeader
        badge="Resume Builder Module"
        title="Create professional, industry-ready resumes using structured templates"
        copy="Students can fill details, preview the resume live, and later export multiple role-based resume versions."
      />
      <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="glass rounded-[32px] p-6">
          <h3 className="text-2xl font-semibold text-white">Resume Form</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <InputField label="Full Name" placeholder="Enter your name" />
            <InputField label="Target Role" placeholder="Web Developer" />
            <InputField label="Email" placeholder="you@example.com" type="email" />
            <InputField label="Phone" placeholder="+91 xxxxxxxxxx" />
          </div>
          <div className="mt-6 rounded-3xl border border-dashed border-white/10 p-4 text-sm text-slate-400">
            Add dynamic forms for skills, projects, education, and experience in the next step.
          </div>
        </div>
        <ResumePreview sections={resumeSections} />
      </div>
    </section>
  )
}
