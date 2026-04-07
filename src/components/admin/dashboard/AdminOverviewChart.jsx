import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts'

export default function AdminOverviewChart({ data }) {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <div className="glass rounded-[32px] p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white">Growth Overview</h3>
          <p className="mt-2 text-sm text-slate-400">Registrations and engagement trend across recent months.</p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="userFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.55} />
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }} />
              <Area type="monotone" dataKey="users" stroke="#22d3ee" fill="url(#userFill)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass rounded-[32px] p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white">Assessment & Interview Activity</h3>
          <p className="mt-2 text-sm text-slate-400">Module usage readiness before backend analytics integration.</p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }} />
              <Bar dataKey="exams" fill="#818cf8" radius={[10, 10, 0, 0]} />
              <Bar dataKey="interviews" fill="#22d3ee" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
