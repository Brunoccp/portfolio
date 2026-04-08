import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import NavDots from '../components/case/NavDots'
import CaseHeader from '../components/case/CaseHeader'
import CaseSummary from '../components/case/CaseSummary'
import CaseContent from '../components/case/CaseContent'
import CaseMetrics from '../components/case/CaseMetrics'
import CaseNextProjects from '../components/case/CaseNextProjects'
import caseData from '../data/cases/assistencia-saude'

const navSections = caseData.sections
  .filter((s) => s.heading)
  .map((s) => ({ id: s.id, label: s.heading! }))

export default function CaseAssistenciaSaude() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Nav />
      <NavDots sections={navSections} />
      <main>
        <CaseHeader
          company={caseData.company}
          readTime={caseData.readTime}
          title={caseData.title}
          heroImage={caseData.heroImage}
          heroImageAlt={caseData.heroImageAlt}
        />
        <CaseMetrics
          metrics={caseData.metrics}
          note={caseData.metricsNote}
        />
        <CaseSummary items={caseData.summary} />
        <CaseContent sections={caseData.sections} />
        <CaseNextProjects
          projects={[
            {
              company: 'TOTVS TECHFIN',
              label: '84% de redução em chamados por dúvida.',
              comingSoon: true,
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
