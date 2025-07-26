import Link from "next/link";

export default function Freebies() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Freebies</h1>
      <p className="text-gray-700 mb-12">
        Free resources and tools I&apos;ve created to help the design community.
      </p>

      {/* Freebies Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Design System Template</h3>
          <p className="text-gray-600 mb-4">
            A comprehensive design system template for Figma.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            Download →
          </Link>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Icon Pack</h3>
          <p className="text-gray-600 mb-4">
            A collection of 100+ custom icons for your projects.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            Download →
          </Link>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Color Palette</h3>
          <p className="text-gray-600 mb-4">
            Curated color palettes for modern web design.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            Download →
          </Link>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Typography Guide</h3>
          <p className="text-gray-600 mb-4">
            Best practices and typography rules for better design.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            Download →
          </Link>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">UI Components</h3>
          <p className="text-gray-600 mb-4">
            Reusable UI components for React and Vue projects.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            Download →
          </Link>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Design Checklist</h3>
          <p className="text-gray-600 mb-4">
            A comprehensive checklist for design reviews.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">
            Download →
          </Link>
        </div>
      </div>
    </div>
  );
}
