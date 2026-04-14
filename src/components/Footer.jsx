export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-[#94A3B8] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© 2026 Charles Smith</p>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://github.com/cssmith615"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#10B981] transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/charlessmith615"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#10B981] transition-colors duration-150"
          >
            LinkedIn
          </a>
          <a
            href="mailto:charles.smith615@gmail.com"
            className="hover:text-[#10B981] transition-colors duration-150"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-[#64748B]">Built with React. Deployed on GitHub Pages.</p>
      </div>
    </footer>
  )
}
