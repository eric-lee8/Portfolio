import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            Eric Joseph Lee
          </Link>
          <div className="ml-10 space-x-8">
            <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="/#projects" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Projects
            </Link>
            <Link href="/#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
