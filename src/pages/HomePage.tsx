import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import CaseGrid from '../components/home/CaseGrid'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <CaseGrid />
      </main>
      <Footer />
    </div>
  )
}
