import { Layout } from "../components/layout"
export const dynamic = 'force-static';
export default function News() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6">News and Events</h1>
      <p>Latest news and upcoming events related to EOH Aerospace will be displayed here.</p>
    </Layout>
  )
}

