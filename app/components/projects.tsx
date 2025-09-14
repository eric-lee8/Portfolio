import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Banking Web Application Feature Enhancement",
      subheading: "Enhancing Card Security with Locking & Reporting Features",
      description:
        "Implemented crucial security features for a banking web application, focusing on card locking and comprehensive reporting functionalities.",
      client: "Central 1",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lock%20n%20Block%20-%20Changes%20Saved-aNzhWFFzwuX6pcOybc7whJZTei15fS.png",
      slug: "banking-web-application-feature-enhancement",
    },
    {
      id: 2,
      title: "3-Sided Volunteer Matching Platform",
      subheading: "End to end product platform development",
      description:
        "Developed a comprehensive platform to connect volunteers, organizations, and beneficiaries, streamlining the process of matching skills with needs.",
      client: "MeaningfulWork",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rawhxcziz2vb3qjexg07-w8IT8WZru7QWEErzSW9J8StdWD7zx4.webp",
      slug: "3-sided-volunteer-matching-platform",
    },
    {
      id: 3,
      title: "Finance Calculators Visual Re-Vamp",
      subheading: "Visual Design Re-design",
      description:
        "Revamped the visual design of finance calculators, enhancing user experience and modernizing the interface for improved engagement and usability.",
      client: "Central 1",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mortgage%20-%20Affordability-4f5DMrN0f55f3CDlblIj4vM8G2i038.png",
      slug: "finance-calculators-visual-revamp",
    },
    {
      id: 4,
      title: "Volunteer Matching Platform: A Research Case Study",
      subheading: "Usability Testing to Identify and Address UX Challenges Pre-Launch",
      description:
        "Conducted comprehensive usability testing to evaluate core functionality and user flows before the product launch, identifying critical UX pain points and providing recommendations to enhance platform usability.",
      client: "MeaningfulWork",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usability-testing-ZdHjWNZXxhTWzxIRDm8J1JZS9YFNM3.jpg",
      slug: "volunteer-matching-platform-research",
    },
  ]

  return (
    <div id="projects" className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Portfolio</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            My Projects
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Here are some of the projects I've worked on. Each one presented unique challenges and opportunities for
            growth.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="pt-6">
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 transition duration-300 ease-in-out hover:shadow-lg border border-gray-100">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-4 bg-indigo-500 rounded-md shadow-lg w-full">
                        <img
                          className={`h-48 w-full rounded-md ${
                            project.id === 2
                              ? "object-contain object-left" // MeaningfulWork platform - show full height, aligned left
                              : "object-cover object-top" // Case 1 and 3 - zoom in, show top part
                          }`}
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{project.title}</h3>
                    <p className="mt-2 text-sm text-indigo-600">{project.subheading}</p>
                    <p className="mt-2 text-sm font-medium text-gray-600">Client: {project.client}</p>
                    <p className="mt-5 text-base text-gray-500">{project.description}</p>
                    <div className="mt-6">
                      <span className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                        View Project Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
