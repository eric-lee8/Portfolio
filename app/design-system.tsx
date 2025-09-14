import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react"

export default function DesignSystem() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-12">
        Design System
      </h1>

      {/* Typography */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Typography</h2>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              H1 Heading
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              text-4xl font-extrabold (responsive to sm:text-5xl lg:text-6xl)
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">H2 Heading</h2>
            <p className="text-sm text-gray-500 mt-2">text-3xl font-bold</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">H3 Heading</h3>
            <p className="text-sm text-gray-500 mt-2">text-2xl font-semibold</p>
          </div>
          <div>
            <h4 className="text-xl font-medium text-gray-800">H4 Heading</h4>
            <p className="text-sm text-gray-500 mt-2">text-xl font-medium</p>
          </div>
          <div>
            <p className="text-base text-gray-500">Base paragraph text</p>
            <p className="text-sm text-gray-500 mt-2">text-base text-gray-500</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Small text</p>
            <p className="text-sm text-gray-500 mt-2">text-sm text-gray-500</p>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="h-20 bg-indigo-600 rounded-md"></div>
            <p className="mt-2 text-sm font-medium">Primary (indigo-600)</p>
            <p className="text-xs text-gray-500">Used for primary actions, links, and highlights</p>
          </div>
          <div>
            <div className="h-20 bg-indigo-100 rounded-md"></div>
            <p className="mt-2 text-sm font-medium">Primary Light (indigo-100)</p>
            <p className="text-xs text-gray-500">Used for backgrounds and subtle highlights</p>
          </div>
          <div>
            <div className="h-20 bg-gray-900 rounded-md"></div>
            <p className="mt-2 text-sm font-medium">Text Dark (gray-900)</p>
            <p className="text-xs text-gray-500">Used for headings and important text</p>
          </div>
          <div>
            <div className="h-20 bg-gray-500 rounded-md"></div>
            <p className="mt-2 text-sm font-medium">Text Medium (gray-500)</p>
            <p className="text-xs text-gray-500">Used for body text and secondary information</p>
          </div>
          <div>
            <div className="h-20 bg-green-500 rounded-md"></div>
            <p className="mt-2 text-sm font-medium">Success (green-500)</p>
            <p className="text-xs text-gray-500">Used for success states and positive indicators</p>
          </div>
          <div>
            <div className="h-20 bg-yellow-500 rounded-md"></div>
            <p className="mt-2 text-sm font-medium">Warning (yellow-500)</p>
            <p className="text-xs text-gray-500">Used for warnings and caution indicators</p>
          </div>
          <div>
            <div className="h-20 bg-white border border-gray-200 rounded-md"></div>
            <p className="mt-2 text-sm font-medium">Background (white)</p>
            <p className="text-xs text-gray-500">Used for page and component backgrounds</p>
          </div>
          <div>
            <div className="h-20 bg-gray-50 border border-gray-200 rounded-md"></div>
            <p className="mt-2 text-sm font-medium">Background Alt (gray-50)</p>
            <p className="text-xs text-gray-500">Used for alternate section backgrounds</p>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Components</h2>

        {/* Buttons */}
        <div className="mb-10">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <div>
              <Button className="bg-indigo-600 hover:bg-indigo-700">Primary Button</Button>
              <p className="text-xs text-gray-500 mt-2">Primary action button</p>
            </div>
            <div>
              <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                Secondary Button
              </Button>
              <p className="text-xs text-gray-500 mt-2">Secondary action button</p>
            </div>
            <div>
              <Button variant="ghost" className="text-indigo-600 hover:bg-indigo-50">
                Ghost Button
              </Button>
              <p className="text-xs text-gray-500 mt-2">Subtle action button</p>
            </div>
            <div>
              <Button className="bg-indigo-600 hover:bg-indigo-700" disabled>
                Disabled Button
              </Button>
              <p className="text-xs text-gray-500 mt-2">Disabled state</p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mb-10">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Card</CardTitle>
                <CardDescription>Used for displaying project information</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  This card style is used throughout the portfolio to display projects and case studies.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-indigo-600 hover:bg-indigo-50">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle>Information Card</CardTitle>
                <CardDescription>Used for displaying information sections</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  This card style with a light gray background is used for information sections and highlights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Alert Boxes */}
        <div className="mb-10">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Alert Boxes</h3>
          <div className="space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex items-start">
                <AlertTriangle className="text-yellow-500 mr-2 mt-1" size={20} />
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Warning Alert</h4>
                  <p className="text-gray-600">Used to highlight issues or warnings in case studies.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <div className="flex items-start">
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Information Alert</h4>
                  <p className="text-gray-600">Used to provide additional information or context.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1" size={20} />
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Success Alert</h4>
                  <p className="text-gray-600">Used to highlight positive outcomes or results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lists */}
        <div className="mb-10">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Lists</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Standard List</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-500">
                <li>List item one</li>
                <li>List item two</li>
                <li>List item three</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Icon List</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span className="text-gray-500">List item with icon</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span className="text-gray-500">List item with icon</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span className="text-gray-500">List item with icon</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Layout Patterns */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Layout Patterns</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">Section Header</h3>
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Section Label</h2>
                <p className="mt-1 text-3xl font-extrabold text-gray-900">Section Title</p>
                <p className="mt-3 text-xl text-gray-500">
                  This is the standard section header pattern used throughout the portfolio.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">Grid Layout</h3>
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-100 p-4 rounded-lg h-32 flex items-center justify-center">Grid Item 1</div>
                <div className="bg-gray-100 p-4 rounded-lg h-32 flex items-center justify-center">Grid Item 2</div>
                <div className="bg-gray-100 p-4 rounded-lg h-32 flex items-center justify-center">Grid Item 3</div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Responsive grid layout used for projects and other content sections.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">Case Study Layout</h3>
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <div className="space-y-6">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900">Case Study Title</h1>
                  <p className="text-indigo-600">Case Study Subtitle</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg h-40 flex items-center justify-center">
                  Case Study Content Section
                </div>
                <div className="bg-gray-100 p-4 rounded-lg h-40 flex items-center justify-center">
                  Case Study Content Section
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Standard case study layout with title, subtitle, and content sections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Icons */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Icons</h2>
        <p className="mb-4 text-gray-500">
          The portfolio uses Lucide React icons throughout the interface. Here are some commonly used icons:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          <div className="flex flex-col items-center">
            <CheckCircle className="h-8 w-8 text-gray-700" />
            <p className="text-sm mt-2">CheckCircle</p>
          </div>
          <div className="flex flex-col items-center">
            <AlertTriangle className="h-8 w-8 text-gray-700" />
            <p className="text-sm mt-2">AlertTriangle</p>
          </div>
          <div className="flex flex-col items-center">
            <ArrowRight className="h-8 w-8 text-gray-700" />
            <p className="text-sm mt-2">ArrowRight</p>
          </div>
        </div>
      </section>
    </div>
  )
}
