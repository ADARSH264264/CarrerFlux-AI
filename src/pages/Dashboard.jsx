import SectionHeader from '../components/common/SectionHeader'
import StatCard from '../components/common/StatCard'
import PerformanceChart from '../components/dashboard/PerformanceChart'
import { activityFeed, assessmentStats, dashboardCards } from '../data/mockData'

export default function Dashboard() {
  return (
    <section className="container-pad py-14">
      <SectionHeader
        badge="User Dashboard Module"
        title="Track roadmap, assessments, interviews, resume score, and achievements from one place"
        copy="A centralized dashboard for progress tracking, result analytics, action items, and student motivation."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-4">
        {dashboardCards.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <PerformanceChart data={assessmentStats} />
        <div className="glass rounded-3xl p-6">
          <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
          <div className="mt-5 space-y-4">
            {activityFeed.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
            Suggested next step: Improve React and SQL scores to cross 80% overall readiness.
          </div>
        </div>
      </div>
    </section>
  )
}
