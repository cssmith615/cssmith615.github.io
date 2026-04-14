import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SkillTag from '../components/SkillTag'

const featuredProjects = [
  {
    name: 'CareerSignal',
    description: 'AI-powered career intelligence platform for mid-level professionals transitioning from specialized domains into commercial roles.',
    status: 'In Development',
    github: 'https://github.com/cssmith615',
  },
  {
    name: 'Vellum',
    description: 'AI-powered BPR platform that analyzes source documents and auto-generates editable BPMN process maps and structured FPDTs.',
    status: 'In Development',
    github: 'https://github.com/cssmith615',
  },
  {
    name: 'BPR Toolkit',
    description: 'A 13-skill Claude Code toolkit covering the full BPR pipeline — from AS-IS analysis through UAT, SOP creation, and Atlassian sync.',
    status: 'Available',
    github: 'https://github.com/cssmith615/claude-bpr-toolkit',
  },
]

const skills = [
  'BPR / Process Improvement',
  'BPMN 2.0',
  'Value Stream Mapping',
  'Requirements Analysis',
  'Agile / Scrum',
  'CSM',
  'JIRA',
  'SharePoint',
  'Visio',
  'Python',
  'React',
  'FastAPI',
  'Claude API',
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#F1F5F9] relative overflow-hidden">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-sm font-semibold text-[#10B981] uppercase tracking-widest mb-4">
              Charles Smith, CSM
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-[#1E293B] leading-tight mb-6"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Business Process Engineer.
              <br />
              Builder. Navy Veteran.
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              I spent a decade in federal government turning complex organizational chaos into structured,
              repeatable processes. Now I build tools that do the same thing — and help companies run better.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="px-6 py-3 rounded-lg bg-[#1E293B] text-white font-semibold hover:bg-[#10B981] transition-colors duration-200"
              >
                View My Work
              </Link>
              <a
                href="/resume.pdf"
                className="px-6 py-3 rounded-lg border-2 border-[#1E293B] text-[#1E293B] font-semibold hover:border-[#10B981] hover:text-[#10B981] transition-colors duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2
            className="text-2xl font-bold text-[#1E293B]"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Featured Projects
          </h2>
          <Link
            to="/projects"
            className="text-sm font-medium text-[#10B981] hover:text-[#059669] transition-colors duration-150"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.name} {...p} featured />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2
            className="text-2xl font-bold text-[#1E293B] mb-8"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Skills & Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <SkillTag key={s} label={s} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
