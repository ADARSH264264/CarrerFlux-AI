import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'

export default function PerformanceChart({ data }) {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-white">Skill Snapshot</h3>
        <p className="mt-1 text-sm text-slate-400">Current subject-wise confidence map.</p>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="rgba(255,255,255,0.1)" />
            <PolarAngleAxis dataKey="name" tick={{ fill: '#cbd5e1', fontSize: 12 }} />
            <Radar dataKey="score" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.35} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
