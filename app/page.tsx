import Header from "./components/header"
import Hero from "./components/hero"
import CoreCompetencies from "./components/core-competencies"
import Projects from "./components/projects"
import Contact from "./components/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CoreCompetencies />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
