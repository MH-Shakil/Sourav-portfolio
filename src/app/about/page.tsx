import Link from "next/link";

export default function About() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With over 5 years of experience in design and development, I&apos;ve
            worked with various brands to create impactful digital experiences.
            My expertise spans from user interface design to complete design
            systems.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I specialize in creating research-driven, results-oriented digital
            experiences that help brands connect with their audiences
            effectively.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">
                UI/UX Design, Design Systems, Brand Identity
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">
                Frontend Development, React, Next.js
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Tools</h3>
              <p className="text-gray-600">
                Figma, Adobe Creative Suite, VS Code
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
