import { cn } from '../../../utils/cn'

const toneMap = {
  Active: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
  Published: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
  Draft: 'border-amber-400/20 bg-amber-400/10 text-amber-300',
  Review: 'border-sky-400/20 bg-sky-400/10 text-sky-300',
  Blocked: 'border-rose-400/20 bg-rose-400/10 text-rose-300',
}

export default function StatusBadge({ label }) {
  return (
    <span className={cn('inline-flex rounded-full border px-3 py-1 text-xs font-semibold', toneMap[label] || 'border-white/10 bg-white/5 text-slate-300')}>
      {label}
    </span>
  )
}
