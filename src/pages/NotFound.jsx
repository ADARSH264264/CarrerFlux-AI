import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-pad flex min-h-[70vh] items-center justify-center py-14">
      <div className="glass rounded-[32px] p-10 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">404</p>
        <h1 className="mt-4 text-4xl font-bold text-white">Page not found</h1>
        <p className="mt-4 text-slate-400">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-slate-950">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
