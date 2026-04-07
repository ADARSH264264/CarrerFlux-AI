import { Link } from 'react-router-dom'
import AuthCard from '../../components/auth/AuthCard'
import InputField from '../../components/common/InputField'

export default function AdminLogin() {
  return (
    <section className="container-pad py-14">
      <AuthCard
        title="Admin login"
        subtitle="Secure access for managing students, roadmaps, assessments, and interview modules."
        sideTitle="CareerFlux AI Admin Console"
        sideCopy="This page is ready for admin auth, protected routes, role-based access, token storage, and dashboard redirection once backend is connected."
      >
        <InputField label="Admin Email" placeholder="admin@careerflux.ai" type="email" />
        <InputField label="Password" placeholder="Enter admin password" type="password" />
        <button className="w-full rounded-2xl bg-white px-4 py-3 font-semibold text-slate-950">Login as Admin</button>
        <p className="text-sm text-slate-400">
          Go back to <Link to="/login" className="text-cyan-300">student login</Link>
        </p>
      </AuthCard>
    </section>
  )
}
