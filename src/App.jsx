import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Roadmap from './pages/Roadmap'
import Assessment from './pages/Assessment'
import MockInterview from './pages/MockInterview'
import ResumeBuilder from './pages/ResumeBuilder'
import ATSChecker from './pages/ATSChecker'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/mock-interview" element={<MockInterview />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/ats-checker" element={<ATSChecker />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}
