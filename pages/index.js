import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>WYLD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main div, first thing you see when you open up the site */}
      <div className="flex flex-col justify-center align-center place-items-center h-screen">
        <h1 className="text-6xl p-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-purple-200">
          WYLD
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
      </div>

      {/* Main bit of homepage, contains a lot about me */}
      <div className="mx-10 md:mx-32 flex flex-col align-center place-items-center h-screen">

        <h1 className="text-6xl p-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-indigo-800 to-blue-600">Lorem ipsum</h1>
        <p className="text-3xl">Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus.</p>

        <h1 className="text-6xl p-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-indigo-800 to-blue-600">Praesent libero</h1>
        <p className="text-3xl">Ut ultrices ultrices enim. Curabitur sit amet mauris.</p>

        <h1 className="text-6xl p-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-indigo-800 to-blue-600">Sed cursus</h1>
        <p className="text-3xl">Morbi in dui quis est pulvinar ullamcorper.</p>
        
      </div>

    </div>
  )
}
