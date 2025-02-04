import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"
import type React from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:block">
            <NavLinks />
          </nav>
          <button
            className="md:hidden text-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-800 py-2">
            <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
          </nav>
        )}
      </header>
      <main className="flex-grow container mx-auto px-4 py-6 md:py-8">{children}</main>
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-start space-x-8 ml-4 md:ml-8">
            <div className="w-24 h-12 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amflag.jpg-i01rIQRqYqoXfyVQ25jZhTcsNaPafs.jpeg"
                alt="US Flag"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-12 w-px bg-gray-600"></div>
            <div className="w-48 h-24 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-xy3UpZacmWvyIdNZyxHq5VY2e2qNNn.png"
                alt="EOH Aerospace"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="mt-4 text-sm text-center px-4">&copy; 2025 EOH Aerospace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function NavLinks({ mobile, setIsMenuOpen }: { mobile?: boolean; setIsMenuOpen?: (isOpen: boolean) => void }) {
  const linkClass = mobile
    ? "block py-2 px-4 hover:bg-gray-700 transition-colors duration-200"
    : "hover:text-gray-300 transition-colors duration-200"
  const onClick = mobile ? () => setIsMenuOpen?.(false) : undefined

  return (
    <ul className={mobile ? "space-y-2" : "flex space-x-6"}>
      <li>
        <Link href="/" className={linkClass} onClick={onClick}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/products" className={linkClass} onClick={onClick}>
          Products
        </Link>
      </li>
      <li>
        <Link href="/services" className={linkClass} onClick={onClick}>
          Services
        </Link>
      </li>
      <li>
        <Link href="/news" className={linkClass} onClick={onClick}>
          News/Events
        </Link>
      </li>
      <li>
        <Link href="/contact" className={linkClass} onClick={onClick}>
          Contact
        </Link>
      </li>
    </ul>
  )
}

