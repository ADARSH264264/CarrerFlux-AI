import SectionHeader from '../components/common/SectionHeader'
import RoadmapCard from '../components/roadmap/RoadmapCard'
import { roadmapPhases } from '../data/mockData'

export default function Roadmap() {
  return (
    <section className="container-pad py-14">
      <SectionHeader
        badge="Career Roadmap Generator"
        title="A step-by-step roadmap from beginner to interview-ready"
        copy="Structured phases, curated topics, milestone tracking, and guided progression help students grow without confusion."
      />
      <div className="mt-10 space-y-5">
        {roadmapPhases.map((phase) => (
          <RoadmapCard key={phase.title} phase={phase} />
        ))}
      </div>
    </section>
  )
}
