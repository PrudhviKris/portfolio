import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { portfolioData } from './data/portfolioData'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c0c10] via-[#111116] to-[#1a0d10] text-ink">
      <Header />
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Experience experience={portfolioData.experience} />
        <Certificates certifications={portfolioData.certifications} />
        <Contact data={portfolioData} />
      </main>
      <Footer />
    </div>
  )
}
