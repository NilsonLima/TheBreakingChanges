export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 p-10">
      <span className="text-white text-center text-8xl md:text-9xl font-extrabold">
        404
      </span>
      <span className="text-white text-center font-extralight text-2xl md:text-3xl my-8">
        {`Oh no 😨! You're lost.`}
      </span>
      <a className="text-white text-center underline hover:text-sky-400 font-bold text-4xl md:text-5xl" href="/">Go back home</a>
    </div>
  )
};
