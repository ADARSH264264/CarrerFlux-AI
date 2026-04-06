import { Link } from 'react-router-dom'
import AuthCard from '../components/auth/AuthCard'
import InputField from '../components/common/InputField'

export default function Register() {
  return (
    <section className="container-pad py-14">
      <AuthCard
        title="Create your account"
        subtitle="Start your personalized career roadmap with smart assessments and interview preparation."
        sideTitle="Personalized access for every student"
        sideCopy="Store user profile, preferences, target career role, scores, milestones, and achievements for a tailored experience."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <InputField label="Full Name" placeholder="Enter your name" />
          <InputField label="Career Role" placeholder="Web Developer" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <InputField label="Email" placeholder="Enter your email" type="email" />
          <InputField label="Mobile" placeholder="Enter mobile number" />
        </div>
        <InputField label="Password" placeholder="Create password" type="password" />
        <button className="w-full rounded-2xl bg-white px-4 py-3 font-semibold text-slate-950">Create Account</button>
        <p className="text-sm text-slate-400">
          Already registered? <Link to="/login" className="text-cyan-300">Login</Link>
        </p>
      </AuthCard>
    </section>
  )
}
