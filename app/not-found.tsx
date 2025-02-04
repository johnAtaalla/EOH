import { Layout } from "./components/layout"

export default function NotFound() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </Layout>
  )
}

