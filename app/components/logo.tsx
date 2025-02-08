export const dynamic = 'force-static';
import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="block">
      <div className="relative w-32 md:w-40">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-xy3UpZacmWvyIdNZyxHq5VY2e2qNNn.png"
          alt="EOH Aerospace"
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>
    </Link>
  )
}

