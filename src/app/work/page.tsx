import Link from "next/link";

export default function Work() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Work</h1>
      <p className="text-gray-700 mb-8">
        My portfolio of projects and case studies.
      </p>

      {/* Work Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Project 1</h3>
          <p className="text-gray-600 mb-4">
            Description of the first project.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            View Project →
          </Link>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Project 2</h3>
          <p className="text-gray-600 mb-4">
            Description of the second project.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            View Project →
          </Link>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Project 3</h3>
          <p className="text-gray-600 mb-4">
            Description of the third project.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            View Project →
          </Link>
        </div>
      </div>
    </div>
  );
}
