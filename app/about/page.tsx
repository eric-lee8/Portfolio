import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href="/" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">About Me</h1>
      <div className="mt-6 text-xl text-gray-500 space-y-6">
        <p>
          Hello! I'm Eric Joseph Lee, a UX Product Designer with 5 years of experience specializing in B2B Solutions and
          end-to-end Agile Product Development.
        </p>
        <p>
          My passion lies in creating intuitive and efficient digital experiences that solve complex problems for
          businesses and their users. I have a strong background in user research, information architecture, and
          iterative design processes.
        </p>
        <p>
          Throughout my career, I've had the opportunity to work on a diverse range of projects, from enhancing banking
          web applications to developing volunteer matching platforms. I thrive in collaborative environments and enjoy
          working closely with product managers, developers, and stakeholders to bring innovative ideas to life.
        </p>
        <p>
          When I'm not designing, you can find me exploring new technologies, attending UX conferences, or mentoring
          aspiring designers. I'm always eager to learn and grow in this ever-evolving field of product design.
        </p>
      </div>
    </div>
  )
}
