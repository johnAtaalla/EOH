import { Layout } from "./components/layout"

export default function Home() {
  return (
    <Layout>
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-100">Welcome to EOH Aerospace</h1>
        <div className="aspect-video bg-gray-800 mb-6 rounded-lg shadow-lg overflow-hidden">
          <p className="flex items-center justify-center h-full text-gray-400">Placeholder for product video</p>
        </div>
        <p className="mb-6 text-gray-300 text-sm md:text-base lg:text-lg">
          EOH Aerospace is at the forefront of innovative aerospace solutions. Our products are designed to meet the
          highest standards of performance and reliability in the most challenging environments.
        </p>
      </div>
    </Layout>
  )
}

