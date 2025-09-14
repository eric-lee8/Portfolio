import Link from "next/link"
import { CheckCircle, AlertTriangle } from "lucide-react"

export default function VolunteerMatchingPlatformResearch() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <nav className="mb-8">
        <Link href="/" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
          ← Back to Home
        </Link>
      </nav>

      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-4">
        Volunteer Matching Platform: A Research Case Study
      </h1>
      <p className="text-xl text-indigo-600 mb-8">Usability Testing to Identify and Address UX Challenges Pre-Launch</p>

      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
        <ul className="space-y-2">
          <li>
            <strong>Focus:</strong> Evaluating core functionality and user flows before the product launch
          </li>
          <li>
            <strong>Outcome:</strong> Identified critical UX pain points and provided recommendations to enhance
            platform usability for volunteers, nonprofits, and corporate partners
          </li>
          <li>
            <strong>Duration:</strong> 4 weeks
          </li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Context & Problem Statement</h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Background</h3>
        <p className="mb-4">MeaningfulWork is a three-sided platform designed to connect:</p>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            Volunteers with meaningful opportunities
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            Nonprofits with skilled volunteers
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            Corporate partners to track and encourage employee volunteering
          </li>
        </ul>
        <p className="mb-4">
          Before launching the platform, we needed to ensure the core functionalities were intuitive and efficiently
          supported each user group's needs.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Research Goal</h3>
        <p className="mb-4">
          The goal of this usability study was to identify friction points in core workflows before launch, ensuring
          users could seamlessly:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Navigate the platform</li>
          <li>Find and interact with key features</li>
          <li>Achieve their goals with minimal confusion</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Research Approach & Methods</h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Participants & Recruitment</h3>
        <ul className="list-none space-y-2 mb-4">
          <li>🔹 11 volunteers</li>
          <li>🔹 10 nonprofit representatives</li>
          <li>🔹 5 corporate representatives</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Research Methods</h3>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            Usability Testing (Moderated Sessions) – Observing users as they navigated the prototype
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            Task-Based Scenarios – Testing core actions based on user roles
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            Think-Aloud Protocol – Encouraging participants to verbalize their thoughts in real time
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            Navigation Testing – Identifying difficulties in locating pages and completing key tasks
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Key Findings & Usability Challenges</h2>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">General Navigation Issues (Affecting all users)</h3>
          <div className="flex items-start mb-2">
            <AlertTriangle className="text-yellow-500 mr-2 mt-1" size={20} />
            <p>
              <strong>Issue:</strong> Users struggled to locate key features due to a lack of clear navigation cues.
            </p>
          </div>
          <p className="mb-2">
            <strong>🔍 Findings:</strong>
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>30% of users had minor difficulty finding the volunteering posting and matching feature.</li>
            <li>Impact tracking & communication tools were unintuitive, requiring multiple clicks to access.</li>
          </ul>
          <p>
            <strong>✅ Recommendation:</strong> Implement a persistent navigation menu with clearer labels & visual
            hierarchy.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            1️⃣ Volunteer Experience – Finding & Applying to Opportunities
          </h3>
          <div className="flex items-start mb-2">
            <AlertTriangle className="text-yellow-500 mr-2 mt-1" size={20} />
            <p>
              <strong>Issue:</strong> Volunteers had difficulty searching for relevant opportunities.
            </p>
          </div>
          <p className="mb-2">
            <strong>🔍 Findings:</strong>
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>
              The search function lacked filters, making it hard to find opportunities based on skills, interests, or
              location.
            </li>
            <li>50% of volunteers found the impact page not as engaging or meaningful</li>
          </ul>
          <p>
            <strong>✅ Recommendation:</strong> Introduce filters for more precise searching and redesign the
            application CTA for better visibility.
          </p>

          <div className="mt-4 flex items-start mb-2">
            <AlertTriangle className="text-yellow-500 mr-2 mt-1" size={20} />
            <p>
              <strong>Issue:</strong> Volunteers struggled to track past contributions.
            </p>
          </div>
          <p className="mb-2">
            <strong>🔍 Findings:</strong>
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>Volunteer history and personal impact metrics were buried under multiple subpages.</li>
          </ul>
          <p>
            <strong>✅ Recommendation:</strong> Create a dashboard summary for quick access to past activities and
            impact.
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            2️⃣ Nonprofit Experience – Creating & Managing Volunteering Opportunities
          </h3>
          <div className="flex items-start mb-2">
            <AlertTriangle className="text-yellow-500 mr-2 mt-1" size={20} />
            <p>
              <strong>Issue:</strong> Nonprofits found the opportunity creation form overwhelming.
            </p>
          </div>
          <p className="mb-2">
            <strong>🔍 Findings:</strong>
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>
              60% of nonprofits hesitated during form completion due to unclear field labels and too many required
              inputs.
            </li>
          </ul>
          <p>
            <strong>✅ Recommendation:</strong> Streamline form completion with progressive disclosure, showing only
            essential fields first.
          </p>

          <div className="mt-4 flex items-start mb-2">
            <AlertTriangle className="text-yellow-500 mr-2 mt-1" size={20} />
            <p>
              <strong>Issue:</strong> Nonprofits had difficulty tracking volunteer progress.
            </p>
          </div>
          <p className="mb-2">
            <strong>🔍 Findings:</strong>
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>40% of users couldn't utilize the volunteer tracking page to monitor participation.</li>
          </ul>
          <p>
            <strong>✅ Recommendation:</strong> Introduce a "Manage Volunteers" tab with progress tracking at-a-glance.
          </p>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            3️⃣ Corporate Partner Experience – Managing Employee Engagement
          </h3>
          <div className="flex items-start mb-2">
            <AlertTriangle className="text-yellow-500 mr-2 mt-1" size={20} />
            <p>
              <strong>Issue:</strong> Corporate users had trouble connecting with nonprofits.
            </p>
          </div>
          <p className="mb-2">
            <strong>🔍 Findings:</strong>
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>30% of corporate partners didn't realize they could message nonprofits directly.</li>
          </ul>
          <p>
            <strong>✅ Recommendation:</strong> Add an integrated messaging feature within the platform.
          </p>

          <div className="mt-4 flex items-start mb-2">
            <AlertTriangle className="text-yellow-500 mr-2 mt-1" size={20} />
            <p>
              <strong>Issue:</strong> Impact tracking lacked clear visualization.
            </p>
          </div>
          <p className="mb-2">
            <strong>🔍 Findings:</strong>
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>Companies wanted a dashboard that looks like excel sheets on employee engagement and impact.</li>
          </ul>
          <p>
            <strong>✅ Recommendation:</strong> Implement data visualization tools with flexible reporting options.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Impact on Product Development</h2>
        <p className="mb-4">
          <strong>🎯 Research insights led to major UX improvements before launch, including:</strong>
        </p>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            Streamlined platform navigation – Implemented a sticky nav bar with clearer section names.
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            Enhanced search & filtering – Volunteers could now filter by skills, location, and cause preferences.
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            Improved volunteer history tracking – Designed a dashboard for quick access to past contributions.
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            Refined nonprofit tools – Simplified the opportunity creation process and made volunteer tracking easier.
          </li>
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            Optimized corporate dashboards – Enhanced employee engagement tracking & custom reporting.
          </li>
        </ul>
        <p>
          These changes ensured the platform launched with an intuitive user experience, reducing potential usability
          issues post-launch.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Lessons Learned & Next Steps</h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Key Takeaways</h3>
        <ul className="list-none space-y-2 mb-4">
          <li>
            🔹 Early usability testing is essential – Identifying pain points before launch helped prevent user
            frustration.
          </li>
          <li>
            🔹 Navigation & information hierarchy must be crystal clear – Many usability issues stemmed from poor
            wayfinding.
          </li>
          <li>
            🔹 Stakeholder involvement is crucial – Aligning research insights with business goals led to stronger
            adoption.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Next Steps</h3>
        <ul className="list-none space-y-2 mb-4">
          <li>🚀 Conduct A/B testing to refine the volunteer opportunity search and matching process.</li>
          <li>🚀 Monitor engagement metrics post-launch to track the effectiveness of UX changes.</li>
          <li>🚀 Continue iterating based on user feedback and behavioral data.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
        <p>
          This usability study shaped the product experience before launch, ensuring that all three user groups could
          easily navigate, interact, and engage with the platform. By testing early, we prevented potential usability
          failures, making the platform more intuitive, user-friendly, and impactful from day one.
        </p>
      </section>
    </div>
  )
}
