import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-900">
        <nav className="flex flex-row justify-end space-x-8 py-8 px-10">
          <span className="text-white uppercase font-light hover:underline">
            <Link href="articles">Articles</Link>
          </span>
          <span className="text-white uppercase font-light hover:underline">
            <Link href="about">About</Link>
          </span>
        </nav>
        <div className="flex-col text-center pt-8 pb-16 md:pt-12 md:pb-24 px-10">
          <span className="text-white text-6xl md:text-7xl lg:text-8xl font-extrabold">The Breaking Changes</span>
          <p className="text-white font-extralight mt-10 md:text-md lg:text-lg">
            Software Engineering tales written by <span className="underline"><Link href="about">Nilson Lima</Link></span>
          </p>
        </div>
      </div>
      {children}
    </div>
  )
}
