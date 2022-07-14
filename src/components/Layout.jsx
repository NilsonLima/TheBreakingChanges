import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div>
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-900">
        <nav className="flex items-center justify-end space-x-8 py-8 px-10 bg-gradient-to-r from-zinc-800 to-zinc-900">
          <span className="text-white uppercase hover:underline">
            <Link href="articles">Home</Link>
          </span>
          <span className="text-white uppercase hover:underline">
            <Link href="about">About</Link>
          </span>
        </nav>
        <div className="flex flex-col items-center pt-8 pb-16 md:pt-12 md:pb-24 px-10">
          <span className="text-white text-center text-5xl md:text-6xl lg:text-7xl font-extrabold">
            The Breaking Changes
          </span>
          <div className="h-2 w-2 rounded-full bg-white my-8" />
          <p className="text-white text-center font-extralight md:text-lg lg:text-xl max-w-5xl">
            Here you will find stories about how challenging and adventurous software engineering is. Content that matters. Allways. 
          </p>
        </div>
      </div>
      {children}
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-900">
        <footer className="flex flex-col items-center py-20 px-10">
          <div className="rounded-full ring-1 ring-white w-24 h-24">
            <Image
              src="/images/nilson_1.webp"
              className="rounded-full"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </div>
          <span className="text-white text-center text-xl md:text-2xl font-extrabold my-6">
            Nilson de Lima
          </span>
          <p className="text-white text-center font-extralight md:text-md lg:text-lg max-w-4xl">
            Just a normal guy writing down some tech stuff. Sincerely, I really hope it will be useful for you someday, somehow. Enjoy the trip ⛵️
          </p>
          <span className="text-white text-center text-sm font-extralight my-6">The Breaking Changes © 2022</span>
        </footer>
      </div>
    </div>
  )
}
