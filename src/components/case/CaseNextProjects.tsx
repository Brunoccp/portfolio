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
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto">
        <span className="text-[#555555] text-xs tracking-widest uppercase block mb-12">
          Mais casos
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.company}
              className="border border-[#1f1f1f] p-8 opacity-50"
            >
              <span className="text-[#555555] text-xs tracking-widest uppercase block mb-4">
                {project.company}
              </span>
              <p className="text-[#f0f0f0] text-lg font-light">
                {project.label}
              </p>
              {project.comingSoon && (
                <span className="text-[#555555] text-xs mt-4 block">
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
