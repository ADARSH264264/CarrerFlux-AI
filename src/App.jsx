import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import AdminLayout from './components/admin/layout/AdminLayout'
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
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import ManageUsers from './pages/admin/ManageUsers'
import ManageRoadmaps from './pages/admin/ManageRoadmaps'
import ManageExamQuestions from './pages/admin/ManageExamQuestions'
import ManageInterviewQuestions from './pages/admin/ManageInterviewQuestions'

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

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="roadmaps" element={<ManageRoadmaps />} />
            <Route path="exam-questions" element={<ManageExamQuestions />} />
            <Route path="interview-questions" element={<ManageInterviewQuestions />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}
