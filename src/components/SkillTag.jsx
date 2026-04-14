export default function SkillTag({ label }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white text-[#475569] border border-slate-200 hover:border-[#10B981] hover:text-[#1E293B] transition-colors duration-150">
      {label}
    </span>
  )
}
