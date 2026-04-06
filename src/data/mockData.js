export const careerRoles = [
  {
    id: 'web-dev',
    title: 'Web Developer',
    level: 'High Demand',
    description: 'Frontend, backend, APIs, deployment, and real project building.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    level: 'Fast Growth',
    description: 'Excel, SQL, Python, dashboards, statistics, and business insights.',
    skills: ['Excel', 'SQL', 'Python', 'Power BI', 'Statistics'],
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    level: 'Core Tech',
    description: 'DSA, system design, OOPs, problem solving, and scalable applications.',
    skills: ['C++', 'Java', 'DSA', 'System Design', 'DBMS'],
  },
]

export const roadmapPhases = [
  {
    title: 'Foundation Stage',
    duration: 'Weeks 1-4',
    progress: 88,
    topics: ['Computer basics', 'Git & GitHub', 'Internet & HTTP', 'Role-specific basics'],
  },
  {
    title: 'Skill Building Stage',
    duration: 'Weeks 5-10',
    progress: 64,
    topics: ['Core concepts', 'Mini projects', 'Assessments', 'Debugging and practical tasks'],
  },
  {
    title: 'Portfolio & Resume Stage',
    duration: 'Weeks 11-14',
    progress: 46,
    topics: ['Case studies', 'Portfolio projects', 'Resume building', 'ATS optimization'],
  },
  {
    title: 'Interview Readiness Stage',
    duration: 'Weeks 15-18',
    progress: 32,
    topics: ['Mock interviews', 'HR questions', 'Aptitude revision', 'Final improvement loop'],
  },
]

export const assessmentStats = [
  { name: 'HTML', score: 82 },
  { name: 'CSS', score: 74 },
  { name: 'JS', score: 69 },
  { name: 'React', score: 61 },
  { name: 'SQL', score: 58 },
]

export const activityFeed = [
  'Completed JavaScript Fundamentals Quiz',
  'Generated ATS-friendly resume version 3',
  'Scored 78/100 in Mock Interview Round 2',
  'Unlocked milestone: 14-day consistency streak',
]

export const dashboardCards = [
  { title: 'Roadmap Completion', value: '68%', change: '+8% this month' },
  { title: 'Average Assessment Score', value: '72%', change: '+5 points' },
  { title: 'Mock Interview Rating', value: '7.8/10', change: 'Strong HR round' },
  { title: 'ATS Resume Score', value: '84/100', change: 'Needs stronger keywords' },
]

export const interviewQuestions = [
  {
    type: 'Technical',
    question: 'Explain the difference between useEffect and useMemo in React.',
    tip: 'Focus on side effects vs memoized values.',
  },
  {
    type: 'HR',
    question: 'Tell me about yourself and why you are interested in this role.',
    tip: 'Keep it role-focused and structured.',
  },
  {
    type: 'Scenario',
    question: 'How would you debug a slow-loading dashboard in production?',
    tip: 'Talk about analysis, tools, and prioritization.',
  },
]

export const resumeSections = [
  'Professional Summary',
  'Skills',
  'Projects',
  'Education',
  'Internships / Experience',
  'Certifications',
]

export const atsChecks = [
  { label: 'Keyword Match', score: 86 },
  { label: 'Formatting', score: 92 },
  { label: 'Action Verbs', score: 74 },
  { label: 'Section Clarity', score: 89 },
  { label: 'Impact Statements', score: 69 },
]
