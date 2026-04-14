export default function TimelineItem({ title, org, period, bullets, last = false }) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-[#10B981] mt-1.5 shrink-0" />
        {!last && <div className="w-px flex-1 bg-slate-200 mt-1" />}
      </div>

      {/* Content */}
      <div className={`pb-8 ${last ? '' : ''}`}>
        <p className="text-xs font-medium text-[#10B981] uppercase tracking-wide mb-0.5">{period}</p>
        <h3 className="font-semibold text-[#1E293B]" style={{ fontFamily: "'Sora', sans-serif" }}>{title}</h3>
        <p className="text-sm text-[#94A3B8] mb-2">{org}</p>
        {bullets && bullets.length > 0 && (
          <ul className="space-y-1">
            {bullets.map((b, i) => (
              <li key={i} className="text-sm text-[#475569] flex gap-2">
                <span className="text-[#10B981] mt-0.5">–</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
