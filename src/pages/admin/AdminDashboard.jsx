import AdminStatCard from '../../components/admin/common/AdminStatCard'
import AdminOverviewChart from '../../components/admin/dashboard/AdminOverviewChart'
import AdminGoalChart from '../../components/admin/dashboard/AdminGoalChart'
import AdminSectionCard from '../../components/admin/common/AdminSectionCard'
import { adminStats, adminTrendData, goalDistribution, recentAdminActivities } from '../../data/adminMockData'

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {adminStats.map((item) => <AdminStatCard key={item.title} {...item} />)}
      </div>

      <AdminOverviewChart data={adminTrendData} />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <AdminGoalChart data={goalDistribution} />
        <AdminSectionCard title="Recent Admin Activity" copy="Quick monitoring blocks for platform operations.">
          <div className="space-y-4">
            {recentAdminActivities.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </AdminSectionCard>
      </div>
    </div>
  )
}
