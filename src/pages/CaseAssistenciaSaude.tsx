import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import CaseHeader from '../components/case/CaseHeader'
import CaseSummary from '../components/case/CaseSummary'
import CaseContent from '../components/case/CaseContent'
import CaseMetrics from '../components/case/CaseMetrics'
import CaseNextProjects from '../components/case/CaseNextProjects'
import caseData from '../data/cases/assistencia-saude'

export default function CaseAssistenciaSaude() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      <main>
        <CaseHeader
          company={caseData.company}
          readTime={caseData.readTime}
          title={caseData.title}
          heroImage={caseData.heroImage}
          heroImageAlt={caseData.heroImageAlt}
        />
        <CaseSummary items={caseData.summary} />
        <CaseContent sections={caseData.sections} />
        <CaseMetrics
          metrics={caseData.metrics}
          note={caseData.metricsNote}
        />
        <CaseNextProjects
          projects={[
            {
              company: 'TOTVS TECHFIN',
              label: 'Em breve',
              comingSoon: true,
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
