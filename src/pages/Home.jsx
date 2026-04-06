import { ArrowRight, BadgeCheck, BrainCircuit, ChartColumnIncreasing, FileText, Rocket, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/common/SectionHeader'
import RoleCard from '../components/career/RoleCard'
import StatCard from '../components/common/StatCard'
import { careerRoles, dashboardCards } from '../data/mockData'

const features = [
  ['User Registration and Login', 'Secure onboarding with JWT-ready UI flow, profile setup, and personalized access.', ShieldCheck],
  ['Career Goal Selection', 'Choose a role like Web Developer, Data Analyst, or Software Engineer.', Rocket],
  ['Career Roadmap Generator', 'Structured, phase-wise roadmap from beginner to advanced.', ChartColumnIncreasing],
  ['Skill Assessment and Exam', 'MCQs, coding tasks, and scenario-based readiness checks.', BadgeCheck],
  ['Performance Analysis and Suggestion', 'AI-focused feedback area for strengths, gaps, and smart suggestions.', BrainCircuit],
  ['AI Mock Interview', 'Technical + HR interview simulation with rating cards and feedback UI.', BrainCircuit],
  ['Resume Builder', 'Professional resume templates with editable sections and export-ready layout.', FileText],
  ['ATS Resume Score Checker', 'Keyword, formatting, and clarity checks for better shortlisting.', ShieldCheck],
]

export default function Home() {
  return (
    <>
      <section className="container-pad py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Intelligent Career Guidance Platform
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">
              Build a <span className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">career-ready future</span> with one powerful student platform.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              CareerFlux AI helps students choose a career path, follow a learning roadmap, test skills, practice interviews, build resumes, improve ATS score, and track growth in one modern dashboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950">
                Explore Dashboard <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/register" className="rounded-full border border-white/10 px-5 py-3 font-semibold text-white hover:bg-white/10">
                Create Account
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {dashboardCards.map((card) => (
              <StatCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad py-14">
        <SectionHeader
          badge="Career Goal Selection"
          title="Choose your target role and let the platform personalize your journey"
          copy="Students can select a role and instantly unlock a focused learning roadmap, tailored assessments, resume guidance, and interview preparation."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {careerRoles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>
      </section>

      <section className="container-pad py-14">
        <SectionHeader
          badge="All Core Modules Included"
          title="Every frontend module you listed is already mapped into this UI architecture"
          copy="This design covers registration, goal selection, roadmap, assessment, analysis, mock interview, resume builder, ATS checker, and dashboard tracking."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map(([title, copy, Icon]) => (
            <div key={title} className="glass rounded-3xl p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
