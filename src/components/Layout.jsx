import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div>
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-900">
        <nav className="flex items-center justify-end space-x-8 py-8 px-10 bg-gradient-to-r from-zinc-800 to-zinc-900">
          <span className="text-white uppercase hover:underline">
            <Link href="/">Home</Link>
          </span>
          <span className="text-white uppercase hover:underline">
            <Link href="/about">About</Link>
          </span>
        </nav>
        <div className="flex flex-col items-center pt-8 pb-16 md:pt-12 md:pb-24 px-10">
          <span className="text-white text-center text-5xl md:text-6xl lg:text-7xl font-extrabold">
            <Link href="/">The Breaking Changes</Link>
          </span>
          <div className="h-2 w-2 rounded-full bg-white my-8" />
          <div className="text-white text-center prose prose-lg md:prose-xl md:max-w-2xl lg:max-w-5xl">
            <p>
              Here you will find stories about how challenging and adventurous software engineering is. Content that matters. Allways. 
            </p>
          </div>
        </div>
      </div>
      <div className="px-8 py-4 md:max-w-full md:px-24 lg:max-w-7xl">
        {children}
      </div>
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-900">
        <footer className="flex flex-col items-center py-20 px-10">
          <div className="rounded-full ring-1 ring-white w-24 h-24">
            <Image
              src="/images/nilson.webp"
              className="rounded-full"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </div>
          <span className="text-white text-center text-xl md:text-2xl font-extrabold my-6">
            Nilson de Lima
          </span>
          <div className="text-white text-center prose prose-lg md:prose-xl md:max-w-2xl lg:max-w-5xl">
            <p>
              Just an usual guy writing down some tech stuff. Currently working at <a href="https://pier.digital/" className="text-white font-extralight underline">Pier Seguradora</a> as a software engineer in Brazil 🇧🇷
            </p>
          </div>
          <div className="flex space-x-4 my-6">
            <a href="https://github.com/NilsonLima" aria-label="Github profile"><Image src="/icons/github.svg" width={30} height={30} /></a>
            <a href="https://www.linkedin.com/in/nilsonlimajr" aria-label="LinkedIn profile"><Image src="/icons/linkedin.svg" width={30} height={30} /></a>
          </div>
          <span className="text-white text-center text-sm font-extralight">© 2022 The Breaking Changes - All Rights Reserved - Domain Name</span>
        </footer>
      </div>
    </div>
  )
}
