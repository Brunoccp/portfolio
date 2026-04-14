import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CaseAssistenciaSaude from './pages/CaseAssistenciaSaude'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cases/assistencia-saude" element={<CaseAssistenciaSaude />} />
      </Routes>
    </>
  )
}
