import TimelineItem from '../components/TimelineItem'

const workHistory = [
  {
    title: 'Business Process & Systems Analyst / BPR Co-Lead',
    org: 'CACI, Inc.',
    period: 'Sep 2022 – Mar 2026',
    bullets: [
      'Led BPMN 2.0 process mapping, stakeholder workshops, and value stream mapping across enterprise IT program',
      'Directed UAT planning and execution; promoted to BPR Co-Lead for Team Three',
      'Produced AS-IS/TO-BE analyses, gap analyses, and Functional Process Documentation Tables',
    ],
  },
  {
    title: 'Management & Program Assistant (GS-0344-06)',
    org: 'Command Navy Recruiting Command',
    period: 'Aug 2017 – Sep 2022',
    bullets: [
      'Managed $1,795,600 enterprise IT account spanning 6,000+ devices across 28 districts',
      'Led fiscal burn rate analysis and procurement lifecycle management',
    ],
  },
  {
    title: 'Human Resource Assistant (GS-0203-05)',
    org: 'Navy Personnel Command, Pers-4013',
    period: 'May 2015 – Aug 2017',
    bullets: [
      'Administered AFT testing coordination across 4,246 Navy activities',
      'Served as liaison for CMS-ID enterprise system rollout',
    ],
  },
  {
    title: 'Human Resource Assistant (GS-0203-04)',
    org: 'Navy Personnel Command, Pers-32',
    period: 'Aug 2014 – May 2015',
    bullets: [],
  },
  {
    title: 'Air Traffic Control Specialist, E-5',
    org: 'United States Navy',
    period: 'May 2004 – Mar 2010 | Honorable Discharge',
    bullets: [],
  },
]

const skillGroups = [
  {
    label: 'Process & Analysis',
    skills: ['BPMN 2.0', 'Value Stream Mapping', 'As-Is/To-Be Analysis', 'Gap Analysis', 'SIPOC', 'OV-6c', 'DoDAF/BEA'],
  },
  {
    label: 'Project & Requirements',
    skills: ['JIRA', 'SharePoint', 'Confluence', 'Visio', 'Requirements Traceability', 'UAT', 'Agile/Scrum'],
  },
  {
    label: 'Building',
    skills: ['Python', 'React', 'FastAPI', 'Claude API', 'Claude Code', 'GitHub'],
  },
  {
    label: 'Tools',
    skills: ['MS Office Suite (advanced Excel)', 'Google Workspace', 'ServiceNow (training)'],
  },
]

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Intro */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <div>
          <p className="text-sm font-semibold text-[#10B981] uppercase tracking-widest mb-4">About</p>
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Process engineer.<br />Builder. Veteran.
          </h1>
          <p className="text-[#475569] leading-relaxed mb-4">
            I'm a U.S. Navy veteran and Certified Scrum Master with over ten years of experience in federal
            government and DoD contracting — most recently as a Business Process &amp; Systems Analyst and
            BPR Co-Lead on the Navy's enterprise IT program at CACI. My work has always been about the same
            thing: finding out how work actually gets done, and turning that into something better.
          </p>
          <p className="text-[#475569] leading-relaxed">
            I'm now applying that same discipline to building software — tools that automate the messy,
            manual parts of process work and help organizations move faster with less friction.
          </p>
        </div>

        {/* Photo placeholder */}
        <div className="flex items-start justify-center md:justify-end">
          <div className="w-64 h-72 rounded-xl bg-slate-200 border border-slate-300 flex items-center justify-center text-[#94A3B8] text-sm">
            Photo coming soon
          </div>
        </div>
      </div>

      {/* Work History */}
      <div className="mb-20">
        <h2
          className="text-2xl font-bold text-[#1E293B] mb-10"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Work History
        </h2>
        <div>
          {workHistory.map((item, i) => (
            <TimelineItem
              key={i}
              {...item}
              last={i === workHistory.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Education & Certs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2
            className="text-2xl font-bold text-[#1E293B] mb-6"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Education
          </h2>
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <p className="font-semibold text-[#1E293B]">BA, English Literature</p>
            <p className="text-sm text-[#94A3B8]">University of Utah | December 2012</p>
          </div>
        </div>

        <div>
          <h2
            className="text-2xl font-bold text-[#1E293B] mb-6"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Certifications
          </h2>
          <div className="flex flex-col gap-3">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-[#1E293B]">Certified Scrum Master (CSM)</p>
                  <p className="text-sm text-[#94A3B8]">Scrum Alliance | February 2024</p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">Cert #1901470</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Active</span>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-[#1E293B]">ServiceNow CSA</p>
                  <p className="text-sm text-[#94A3B8]">Expected May 2026</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2
          className="text-2xl font-bold text-[#1E293B] mb-8"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold text-[#10B981] uppercase tracking-widest mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full text-sm bg-white border border-slate-200 text-[#475569]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
