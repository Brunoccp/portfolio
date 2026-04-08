interface NextProject {
  company: string
  label: string
  comingSoon?: boolean
}

interface CaseNextProjectsProps {
  projects: NextProject[]
}

export default function CaseNextProjects({ projects }: CaseNextProjectsProps) {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-[rgba(0,0,0,0.08)]">
      <div className="max-w-6xl mx-auto">
        <span className="text-[#6B6B6B] text-xs tracking-[0.15em] uppercase font-semibold block mb-12">
          Próximos cases
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.company}
              className="border border-[rgba(0,0,0,0.08)] rounded-2xl p-8 opacity-50 bg-white"
            >
              <span className="text-[#7F1D1D] text-xs font-semibold tracking-[0.1em] uppercase block mb-4">
                {project.company}
              </span>
              <p className="text-[#1A1A1A] font-display font-bold text-lg leading-snug">
                {project.label}
              </p>
              {project.comingSoon && (
                <span className="text-[#6B6B6B] text-xs mt-4 block">
                  Em breve
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
