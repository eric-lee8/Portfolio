import { notFound } from "next/navigation"
import Link from "next/link"
import { CheckCircle, AlertTriangle } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Banking Web Application Feature Enhancement",
    subheading: "Enhancing Card Security with Locking & Reporting Features",
    description:
      "As the primary designer, I was responsible for defining the look and functionality of the card-locking and reporting features within the existing Central 1 web platform. The project aimed to enhance the user experience by introducing advanced security and control features for card management. Key responsibilities included defining user flows, creating wireframes, UX design, and developer handoff.",
    client: "Central 1",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lock%20n%20Block%20-%20Changes%20Saved-aNzhWFFzwuX6pcOybc7whJZTei15fS.png",
    slug: "banking-web-application-feature-enhancement",
    timeline: "3-week project from start to final handoff",
    team: "Collaborated with Product Owner and 3 Engineers",
    results: ["Streamlined card security workflow by 30%", "Cut support calls by an estimated 30%"],
    caseStudyImages: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.1.jpg-gnQ1Xuc4e1qtKB2jqcZPn13hHbFOyv.jpeg",
        alt: "Project overview and final interface",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.2.jpg-17WyOE1nmEhvZif5kKnW09qwAI0hFq.jpeg",
        alt: "Company overview and project goals",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.3.jpg-vkCQp2VHSsjCce0Fcvks91s945vDpJ.jpeg",
        alt: "Project results and metrics",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.4.jpg-Hg27WlflhvVm0IHP0jgKlpGjBrfHno.jpeg",
        alt: "Project timeline and process",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.5.jpg-ZKdcHMBez5oyWelmpVL49sHfCYIO09.jpeg",
        alt: "Stakeholder interviews and goals",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.6.jpg-kOyKZQc2nGSZX0AUioJ9wc5OhTFu6J.jpeg",
        alt: "Competitor analysis research",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.7.jpg-FMB88Lg9FTW6TK3CFJpqCBJH5XT57o.jpeg",
        alt: "Information architecture decisions",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.8.jpg-6EQVA8BQvr8OeVD9A6VqcfQmycMZzM.jpeg",
        alt: "Card locking interface design",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.9.jpg-ytHq5dyVHEcCBh9NYziKP4hh3NEr4B.jpeg",
        alt: "Lost/stolen card reporting feature",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.10.jpg-U8naSHM2Bw8e3grm7oXqeSDWE48B05.jpeg",
        alt: "Implementation and feedback results",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.11.jpg-9SJLokGXMCgd3OfjiDa9WcYlU405LE.jpeg",
        alt: "Project outcomes and lessons learned",
      },
    ],
  },
  {
    id: 2,
    title: "3-Sided Volunteer Matching Platform",
    subheading: "End to end product platform development",
    description:
      "As the lead designer, I created a web app platform that seamlessly connects skilled professionals with nonprofits and companies, empowering meaningful pro-bono collaborations and enhancing corporate employee volunteer programs. This end-to-end project involved everything from research to implementation.",
    client: "MeaningfulWork",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rawhxcziz2vb3qjexg07-w8IT8WZru7QWEErzSW9J8StdWD7zx4.webp",
    slug: "3-sided-volunteer-matching-platform",
    timeline: "4 months project from start to final handoff",
    team: "Collaborated with Product Manager, 2 Engineers, and 2 UI Interns",
    results: [
      "Successfully launched the platform within the 4-month timeline, aligning with a major nonprofit conference",
      "Onboarded 250 volunteers, 170 nonprofits, 200+ postings, 50 completed postings, and 5 corporate clients within the first 10 months of release",
      "Received positive feedback from all three user groups (volunteers, nonprofits, and corporate partners)",
    ],
    caseStudyImages: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.1.jpg-gQ8KfdZjtihcv9IXoipLL4ODr2OJHU.jpeg",
        alt: "Project overview and platform showcase",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.2.jpg-m4cPmVtR50H9lF7YGdCBhMIWuEqaR8.jpeg",
        alt: "Company overview and mission",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.3.jpg-4oDkHqyiSTOlaFAp9tpy5y3DcZSNUY.jpeg",
        alt: "Platform success metrics",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.4.jpg-f5p0PYMy6nI0NQGDUhj3wSjwJTXoTO.jpeg",
        alt: "Project timeline and development phases",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.5.jpg-gAb7EeywEW993bWXGUQ5nb0jmYETlf.jpeg",
        alt: "Research insights and emotional design principles",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.6.jpg-by2ymc4UnrGrdWIsfpsPpTqBkPvmTw.jpeg",
        alt: "User personas for volunteers and non-profits",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.7.jpg-p5kjh1mmiigdgC2MTeXkXuICxrro5h.jpeg",
        alt: "User personas for corporate partners",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.8.jpg-VwwUmOExjpTkFivQOjysNxmmwTLS4T.jpeg",
        alt: "Information architecture and wireframe planning",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.9.jpg-lrpns68kJp5VQhRO3vcHudk5AhZxGK.jpeg",
        alt: "User flow diagram",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.10.jpg-XR1vVrTkE0lyV0UYPCTTbQmaSRFePY.jpeg",
        alt: "Detailed information architecture for all user groups",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.11.jpg-1MgYv7cA2FG3EEGPVy301CoOuUt8Ce.jpeg",
        alt: "Design system documentation and visual guidelines",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.12.jpg-aKDJsHVrrRdyVTxKTlddFndUX6DtCW.jpeg",
        alt: "Volunteer portal interface designs",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.13.jpg-WwXyWGOOQU6KcQv1IDA2Oc4YDz2lk7.jpeg",
        alt: "Non-profit portal interface designs",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.14.jpg-TTsu68ew2Y6N7aaoEv7oKq0iMn1F47.jpeg",
        alt: "Corporate portal interface designs",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.15.jpg-danCJXnvuvbFgWmw1DXLEibD9CuEf7.jpeg",
        alt: "Usability testing results and insights",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.16.jpg-kMADmteiOYW6ChaRlmWUvdp9WcwcIC.jpeg",
        alt: "Volunteer testing script and methodology",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.17.jpg-4mtu47dSKCRyuHlzuFWGtYOf5eLL98.jpeg",
        alt: "Non-profit testing script and scenarios",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.18.jpg-bZmVkN3OsKzDSU6L38tpu3KqLT9Sqh.jpeg",
        alt: "Corporate testing script and tasks",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.19.jpg-osdM87SoY515c2b1ZPfD0vkYzGAMa7.jpeg",
        alt: "Final platform implementation across devices",
      },
    ],
  },
  {
    id: 3,
    title: "Finance Calculators Visual Re-Vamp",
    subheading: "Visual Design Re-design",
    description:
      "The finance calculators (7) were refreshed to enhance usability and aesthetics by refining UI elements and integrating design tokens from Central 1's new design system. This redesign was requested by over 300 clients as part of their broader modernization initiatives. Responsibilities included UI Design & Prototyping, Research & Analysis, Design System Integration, and Collaboration & Implementation.",
    client: "Central 1",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mortgage%20-%20Affordability-4f5DMrN0f55f3CDlblIj4vM8G2i038.png",
    slug: "finance-calculators-visual-revamp",
    timeline: "2-week project from start to final implementation",
    team: "Collaborated with 1 Front-End Developer and consulted with the Design System Creator in an Agile Style Development",
    results: [
      "The redesigned calculators featured a modernized UI with enhanced clarity, making data entry and interpretation more intuitive for users",
      "Successfully delivered a solution requested by over 300 clients, aligning with their modernization goals and improving overall satisfaction",
      "Contributed new components and refinements to the design system, increasing its adaptability for future projects",
    ],
    caseStudyImages: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.1.jpg-3moC1z8k0a6kQqB25YO1RZoEuOI4Bw.jpeg",
        alt: "Project overview and final calculator design",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.2.jpg-NQRmqZciitGPhtQ08UO8ppHRNUZFrX.jpeg",
        alt: "Central 1 company overview and mission",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.3.jpg-9r25vMFKusoQ5mfq5EjQXbD3brlq1O.jpeg",
        alt: "Project timeline and development phases",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.4.jpg-IrMZyLG9WJC9Q1cC2hPYht5U9BfLGz.jpeg",
        alt: "Competitive research and analysis",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.5.jpg-8rBQg0qu4KxfFqULhV2PpeI4FFv0IY.jpeg",
        alt: "Input types and field specifications",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.6.jpg-HwkXjKDn465BxvvZrDQrnAcUC3V7jO.jpeg",
        alt: "Initial mockups and design concepts",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.7.jpg-DAyN5ktOsajSqHCl9L7fcIq73Pfhhw.jpeg",
        alt: "Design system implementation and documentation",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.8.jpg-Mm2kpoUDoD3hr9Bop24MZiCKEwBwj9.jpeg",
        alt: "Development collaboration and implementation",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.9.jpg-y2sLaNKnCUv3MpKsNmpngVr7IfuKh8.jpeg",
        alt: "Final mortgage calculator interface comparison",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.11.jpg-cMOTqYUHczd1eErn3c6FXN6AaxHWZ7.jpeg",
        alt: "Retirement planner calculator redesign",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.12.jpg-lpLyWBN3pXKDDVtegCYL4GlZOSgBYn.jpeg",
        alt: "Education savings calculator redesign",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.13.jpg-Ewh8Gb4tdY2uYuoW2zRD8JUVAGvmjh.jpeg",
        alt: "RRIF calculator redesign",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.14.jpg-wdqBwRgzsqOGJbGVSMo3jDcjq3kvFB.jpeg",
        alt: "TFSA calculator redesign",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.15.jpg-pmfYvUrXgsc9e9BABYilmdhIa8tzwu.jpeg",
        alt: "Foreign exchange calculator redesign",
      },
    ],
  },
  {
    id: 4,
    title: "Volunteer Matching Platform: A Research Case Study",
    subheading: "Usability Testing to Identify and Address UX Challenges Pre-Launch",
    description:
      "Conducted comprehensive usability testing to evaluate core functionality and user flows before the product launch, identifying critical UX pain points and providing recommendations to enhance platform usability for volunteers, nonprofits, and corporate partners.",
    client: "MeaningfulWork",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usability-testing-ZdHjWNZXxhTWzxIRDm8J1JZS9YFNM3.jpg",
    slug: "volunteer-matching-platform-research",
    timeline: "4-week project focused on pre-launch evaluation",
    team: "Led research efforts, collaborating with Product Manager and UX team",
    results: [
      "Identified and addressed critical UX pain points before launch",
      "Provided actionable recommendations for enhancing platform usability",
      "Improved user flows for volunteers, nonprofits, and corporate partners",
    ],
    caseStudyImages: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/research-overview-nHjWNZXxhTWzxIRDm8J1JZS9YFNM3.jpg",
        alt: "Research overview and methodology",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/user-personas-kLmNOPQrStUvWxYzABCDEFGHIJK.jpg",
        alt: "User personas for volunteers, nonprofits, and corporate partners",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usability-findings-LMNOPQrStUvWxYzABCDEFGHIJK.jpg",
        alt: "Key usability findings and pain points",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recommendations-MNOPQrStUvWxYzABCDEFGHIJKL.jpg",
        alt: "Recommendations for platform improvements",
      },
    ],
  },
]

import Header from "../../components/header"

// ... imports remain the same

// ... projects array remains the same

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="mb-12 border-b border-gray-200 pb-8">
          <ul className="flex flex-wrap justify-center gap-6">
            {projects.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/projects/${p.slug}`}
                  className={`text-base font-medium ${p.slug === slug
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-900"
                    }`}
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-indigo-600">{project.subheading}</p>
          <p className="mt-4 text-xl text-gray-500">{project.description}</p>
          <p className="mt-2 text-lg font-medium text-gray-600">Client: {project.client}</p>
          <div className="mt-4">
            <p className="text-md text-gray-600">{project.timeline}</p>
            <p className="text-md text-gray-600">{project.team}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Results:</h3>
            <ul className="mt-2 list-disc list-inside text-md text-gray-600">
              {project.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        </div>

        {project.slug === "volunteer-matching-platform-research" && (
          <div className="mt-16 space-y-12">
            <section className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Research Approach & Methods</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Participants</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>11 volunteers</li>
                    <li>10 nonprofit representatives</li>
                    <li>5 corporate representatives</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Methods</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                      <span>Usability Testing (Moderated Sessions)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                      <span>Task-Based Scenarios</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                      <span>Think-Aloud Protocol</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                      <span>Navigation Testing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Key Findings & Usability Challenges</h2>
              <div className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">General Navigation Issues</h3>
                  <div className="flex items-start mb-2">
                    <AlertTriangle className="text-yellow-500 mr-2 mt-1" size={20} />
                    <p>Users struggled to locate key features due to a lack of clear navigation cues.</p>
                  </div>
                  <p className="mb-2">
                    <strong>Recommendation:</strong> Implement a persistent navigation menu with clearer labels & visual
                    hierarchy.
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Volunteer Experience</h3>
                  <div className="flex items-start mb-2">
                    <AlertTriangle className="text-yellow-500 mr-2 mt-1" size={20} />
                    <p>Volunteers had difficulty searching for relevant opportunities and tracking past contributions.</p>
                  </div>
                  <p className="mb-2">
                    <strong>Recommendation:</strong> Introduce filters for more precise searching and create a dashboard
                    summary for quick access to past activities and impact.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Nonprofit Experience</h3>
                  <div className="flex items-start mb-2">
                    <AlertTriangle className="text-yellow-500 mr-2 mt-1" size={20} />
                    <p>
                      Nonprofits found the opportunity creation form overwhelming and had difficulty tracking volunteer
                      progress.
                    </p>
                  </div>
                  <p className="mb-2">
                    <strong>Recommendation:</strong> Streamline form completion with progressive disclosure and introduce
                    a "Manage Volunteers" tab with progress tracking at-a-glance.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Impact on Product Development</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Streamlined platform navigation with a sticky nav bar</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Enhanced search & filtering capabilities</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Improved volunteer history tracking with a dashboard</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Refined nonprofit tools for opportunity creation and volunteer management</span>
                </li>
              </ul>
            </section>

            <section className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Lessons Learned & Next Steps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Takeaways</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Early usability testing is essential</li>
                    <li>Navigation & information hierarchy must be crystal clear</li>
                    <li>Stakeholder involvement is crucial</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Next Steps</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Conduct A/B testing on the volunteer opportunity search</li>
                    <li>Monitor engagement metrics post-launch</li>
                    <li>Continue iterating based on user feedback</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {project.caseStudyImages && (
          <div className="mt-16 space-y-8">
            {project.caseStudyImages.map((image, index) => (
              <div key={index} className="relative w-full">
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full rounded-lg shadow-lg" />
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
