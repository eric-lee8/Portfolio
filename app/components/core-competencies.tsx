import { CheckCircle } from "lucide-react"

export default function CoreCompetencies() {
  const skills = [
    {
      title: "User Experience Design",
      description: "Crafting seamless and intuitive interfaces that prioritize user needs and enhance engagement.",
    },
    {
      title: "Product Strategy",
      description: "Driving product vision by aligning business goals with user expectations for impactful solutions.",
    },
    {
      title: "Product Market Fit",
      description: "Bridging user insights and market demands to develop products that resonate with target audiences.",
    },
    {
      title: "Qualitative Interviews",
      description:
        "Extracting deep user insights through empathetic, targeted conversations to inform design decisions.",
    },
    {
      title: "Usability Testing",
      description:
        "Validating designs through iterative testing to ensure optimal functionality and user satisfaction.",
    },
    {
      title: "Information Architecture & Workflows",
      description: "Designing clear information architectures and workflows to streamline user journeys.",
    },
    {
      title: "Low-Code Development",
      description:
        "Accelerating app creation using platforms that minimize coding, enabling faster, cost-effective, and scalable solutions.",
    },
    {
      title: "AI Automation",
      description: "Streamlining workflows with AI to handle repetitive tasks, boost efficiency, and reduce errors.",
    },
    {
      title: "AI Agents (New)",
      description: "AI-powered systems that automate decisions and provide real-time, personalized assistance.",
    },
  ]

  return (
    <section id="core-competencies" className="bg-gray-50/50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Expertise</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Core Competencies
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            My key skills and areas of expertise in UX Product Design and B2B solutions.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">{skill.title}</h3>
                  </div>
                </div>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
