import { Link, NavLink } from 'react-router-dom'
import { BriefcaseBusiness, Menu, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../../utils/cn'

const links = [
  ['/', 'Home'],
  ['/dashboard', 'Dashboard'],
  ['/roadmap', 'Roadmap'],
  ['/assessment', 'Assessment'],
  ['/mock-interview', 'Mock Interview'],
  ['/resume-builder', 'Resume'],
  ['/ats-checker', 'ATS Checker'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container-pad flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-slate-950 shadow-glow">
            <BriefcaseBusiness className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-bold text-white">CareerFlux AI</p>
            <p className="text-xs text-slate-400">Career guidance • Resume • Interview prep</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  isActive ? 'bg-white text-slate-950' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/login" className="text-sm text-slate-300 hover:text-white">Login</Link>
          <Link to="/register" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
            <Sparkles className="h-4 w-4" /> Get Started
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>

      {open ? (
        <div className="container-pad space-y-2 pb-4 lg:hidden">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)} className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
              {label}
            </NavLink>
          ))}
        </div>
      ) : null}
    </header>
  )
}
