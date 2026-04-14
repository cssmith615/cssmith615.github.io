import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    name: 'CareerSignal',
    type: 'Web Application',
    stack: ['React 18 + Vite', 'Python FastAPI', 'SQLite → PostgreSQL', 'Claude API (claude-sonnet-4-6)', 'jobspy', 'USAJobs API'],
    description:
      'AI-powered career intelligence platform for mid-level professionals transitioning from specialized domains (federal, military, healthcare) into commercial roles. Features a Title Intelligence Engine that extracts equivalent job titles from a user\'s resume, Federal vs. Civilian archetype routing, work mode filtering, and multiple resume version management. Built because the existing tools don\'t understand federal career transitions.',
    status: 'In Development',
    github: 'https://github.com/cssmith615',
  },
  {
    name: 'Vellum',
    type: 'SaaS Platform',
    stack: ['Next.js (TypeScript)', 'FastAPI (Python)', 'Claude API', 'Supabase', 'Clerk', 'Stripe', 'draw.io XML', 'openpyxl'],
    description:
      'AI-powered BPR platform that uses a 7-pass extraction engine to analyze source documents (SOPs, regulations, manuals) and automatically generate editable BPMN process maps and structured Functional Process Documentation Tables (FPDTs). Designed for BPR consultants and enterprise BA teams. Solves the process that used to take days by hand.',
    status: 'In Development',
    github: 'https://github.com/cssmith615',
  },
  {
    name: 'BPR Toolkit',
    type: 'Claude Code Plugin / CLI Tool',
    stack: ['Claude Code', 'Python', 'Atlassian MCP', 'Zephyr Scale REST API'],
    description:
      'A 13-skill Claude Code toolkit covering the full BPR pipeline — from AS-IS process analysis through UAT planning, requirements generation, SOP creation, change management, and Atlassian sync. Built from my own CACI workflow. Each skill is org-agnostic and production-ready.',
    status: 'Available',
    github: 'https://github.com/cssmith615/claude-bpr-toolkit',
  },
  {
    name: 'Aisle',
    type: 'Mobile / Web Application',
    stack: [],
    description:
      'Wedding planning app built to help couples organize vendors, timelines, and guest logistics in one place.',
    status: 'Built',
    github: 'https://github.com/cssmith615',
  },
  {
    name: 'Chuck',
    type: 'Claude Code Extension',
    stack: [],
    description:
      'Semantic context injector for Claude Code using a Decision Ledger pattern. Maintains persistent project state and decision history across Claude Code sessions.',
    status: 'Experimental',
    github: 'https://github.com/cssmith615/chuck',
  },
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-sm font-semibold text-[#10B981] uppercase tracking-widest mb-4">Work</p>
      <h1
        className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        Projects
      </h1>
      <p className="text-[#475569] max-w-xl mb-12">
        Tools I've built or am building — focused on process automation, career intelligence, and developer productivity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </div>
    </div>
  )
}
