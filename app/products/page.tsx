"use client"
export const dynamic = 'force-static';
import Image from "next/image"
import { motion } from "framer-motion"
import { Layout } from "../components/layout"

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Products() {
  return (
    <Layout>
      <motion.div initial="initial" animate="animate" variants={stagger} className="max-w-6xl mx-auto">
        <motion.h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-100" variants={fadeIn}>
          Our Products
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div className="lg:col-span-2" variants={fadeIn}>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-200">Government Solutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ProductVariant name="Variant A" />
              <ProductVariant name="Variant B" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mt-6 mb-4 text-gray-200">Vehicle Integration</h2>
            <motion.div
              className="aspect-video bg-gray-800 mb-4 overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/EOH/placeholder.svg"
                alt="Vehicle Integration"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <p className="text-gray-300 text-sm md:text-base">
              Information about how our products can be integrated with various vehicles.
            </p>
          </motion.div>
          <motion.div variants={fadeIn}>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-200">Compliance</h2>
            <p className="text-gray-300 text-sm md:text-base">
              Our products comply with the following cyber protocols:
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm md:text-base mt-2">
              <li>Protocol 1</li>
              <li>Protocol 2</li>
              <li>Protocol 3</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  )
}

function ProductVariant({ name }: { name: string }) {
  return (
    <motion.div className="bg-gray-800 p-4 rounded-lg" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-100">{name}</h3>
      <motion.div
        className="aspect-video bg-gray-700 mb-2 overflow-hidden rounded"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image src="/EOH/placeholder.svg" alt={name} width={400} height={225} className="w-full h-full object-cover" />
      </motion.div>
      <p className="text-gray-300 text-sm md:text-base">Description of {name} capabilities and features.</p>
    </motion.div>
  )
}

