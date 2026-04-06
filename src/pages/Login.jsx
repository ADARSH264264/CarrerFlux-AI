import { Link } from 'react-router-dom'
import AuthCard from '../components/auth/AuthCard'
import InputField from '../components/common/InputField'

export default function Login() {
  return (
    <section className="container-pad py-14">
      <AuthCard
        title="Welcome back"
        subtitle="Login using email or mobile number to continue your learning journey."
        sideTitle="User Registration and Login Module"
        sideCopy="This screen is ready for secure authentication, JWT integration, progress sync, profile access, and personalized recommendations."
      >
        <InputField label="Email or Mobile Number" placeholder="Enter your email or mobile" />
        <InputField label="Password" placeholder="Enter password" type="password" />
        <button className="w-full rounded-2xl bg-white px-4 py-3 font-semibold text-slate-950">Login</button>
        <p className="text-sm text-slate-400">
          New user? <Link to="/register" className="text-cyan-300">Create account</Link>
        </p>
      </AuthCard>
    </section>
  )
}
