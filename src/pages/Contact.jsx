export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-sm font-semibold text-[#10B981] uppercase tracking-widest mb-4">Contact</p>
      <h1
        className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        Let's Connect
      </h1>
      <p className="text-[#475569] max-w-xl mb-12 leading-relaxed">
        I'm currently open to Business Process Engineer, Business Analyst, and Process Improvement roles —
        remote or hybrid. I'm also always happy to connect with other builders.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact links */}
        <div className="flex flex-col gap-4">
          <a
            href="mailto:charles.smith615@gmail.com"
            className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-5 hover:border-[#10B981] hover:shadow-sm transition-all duration-150 group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] flex items-center justify-center text-[#1E293B] group-hover:bg-[#10B981] group-hover:text-white transition-colors duration-150">
              @
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] uppercase tracking-wide font-medium">Email</p>
              <p className="text-[#1E293B] font-medium">charles.smith615@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/charlessmith615"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-5 hover:border-[#10B981] hover:shadow-sm transition-all duration-150 group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] flex items-center justify-center text-[#1E293B] font-bold text-sm group-hover:bg-[#10B981] group-hover:text-white transition-colors duration-150">
              in
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] uppercase tracking-wide font-medium">LinkedIn</p>
              <p className="text-[#1E293B] font-medium">linkedin.com/in/charlessmith615</p>
            </div>
          </a>

          <a
            href="https://github.com/cssmith615"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-5 hover:border-[#10B981] hover:shadow-sm transition-all duration-150 group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] flex items-center justify-center text-[#1E293B] font-bold text-sm group-hover:bg-[#10B981] group-hover:text-white transition-colors duration-150">
              gh
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] uppercase tracking-wide font-medium">GitHub</p>
              <p className="text-[#1E293B] font-medium">github.com/cssmith615</p>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-5">
            <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] flex items-center justify-center text-[#1E293B] text-sm">
              📍
            </div>
            <div>
              <p className="text-xs text-[#94A3B8] uppercase tracking-wide font-medium">Location</p>
              <p className="text-[#1E293B] font-medium">Oakland, TN (Memphis area)</p>
            </div>
          </div>
        </div>

        {/* CTA panel */}
        <div className="bg-[#1E293B] rounded-xl p-8 flex flex-col justify-between">
          <div>
            <h2
              className="text-xl font-bold text-white mb-3"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Open to opportunities
            </h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              Looking for roles where process expertise and technical depth both matter. Federal background,
              DoD experience, and active builder portfolio.
            </p>
          </div>
          <a
            href="mailto:charles.smith615@gmail.com"
            className="px-6 py-3 rounded-lg bg-[#10B981] text-white font-semibold text-center hover:bg-[#059669] transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  )
}
