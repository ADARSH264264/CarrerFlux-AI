import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'

const colors = ['#22d3ee', '#818cf8', '#34d399', '#fb7185', '#f59e0b']

export default function AdminGoalChart({ data }) {
  return (
    <div className="glass rounded-[32px] p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">Top Career Goals</h3>
        <p className="mt-2 text-sm text-slate-400">Role interest distribution across student registrations.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)] xl:items-center">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" innerRadius={70} outerRadius={100} paddingAngle={3}>
                {data.map((item, index) => (
                  <Cell key={item.name} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: colors[index % colors.length] }} />
                <span className="text-sm text-slate-200">{item.name}</span>
              </div>
              <span className="text-sm font-semibold text-white">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
