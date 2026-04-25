export default function ProjectCard({ name, type, stack, description, status, github, featured = false }) {
  const statusColors = {
    'In Development': 'bg-amber-100 text-amber-800',
    'Available': 'bg-emerald-100 text-emerald-800',
    'Built': 'bg-blue-100 text-blue-800',
    'Experimental': 'bg-purple-100 text-purple-800',
  }

  const badgeClass = statusColors[status] || 'bg-slate-100 text-slate-700'

  return (
    <div className={`bg-white rounded-xl border border-slate-200 p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-200 ${featured ? 'border-l-4 border-l-[#10B981]' : ''}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-[#1E293B] text-lg" style={{ fontFamily: "'Sora', sans-serif" }}>
            {name}
          </h3>
          {type && <p className="text-xs text-[#94A3B8] mt-0.5">{type}</p>}
        </div>
        {status && (
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${badgeClass}`}>
            {status}
          </span>
        )}
      </div>

      <p className="text-sm text-[#475569] leading-relaxed flex-1">{description}</p>

      {stack && (
        <p className="text-xs text-[#94A3B8]">
          <span className="font-medium">Stack:</span> {Array.isArray(stack) ? stack.join(', ') : stack}
        </p>
      )}

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name} on GitHub`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#10B981] hover:text-[#059669] transition-colors duration-150 mt-auto"
        >
          View on GitHub →
        </a>
      )}
    </div>
  )
}
