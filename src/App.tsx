import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CaseAssistenciaSaude from './pages/CaseAssistenciaSaude'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cases/assistencia-saude" element={<CaseAssistenciaSaude />} />
    </Routes>
  )
}
