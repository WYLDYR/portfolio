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

        {/* Large title */}
        <span className="bg-white shadow-2xl rounded-2xl transition ease-in-out hover:scale-110 duration-500">
          <h1 className="text-6xl p-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-purple-200">
            WYLD
          </h1>
        </span>

        {/* Little floating arrows pointing down to indicate to the user that the content is below */}
        <span className="p-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </span>

      </div>

      {/* Main bit of homepage, contains a lot about me */}
      <div className="text-3xl mx-10 md:mx-32 flex flex-col align-left place-items-left h-screen w-screen bg-gray-900 text-[#cacaca]">

        <h1 className="text-6xl p-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-indigo-800 to-blue-600">About me</h1>
        <p className="mx-32">
          Hi! I'm a highschool student from Colorado, interested in and studying computer science and cyber security.
          <br></br>
          I'm proficent in
            <a className="text-[#f74a01]"> Rust</a>,
            <a className="text-[#659ad1]"> C++</a>,
            <a className="text-[#3771a2]"> Python</a>, and
            <a className="text-[#dfca2d]"> Javascript</a>,
          and looking forwards to learning more languages.
        </p>

        <div className="flex flex-row justify-center items-center h-screen w-screen">
          <a href="https://github.com/WYLDYR/portfolio" className="mx-10">
            <img src="/github.svg" width="60"></img>
          </a>
          <a href="https://steamcommunity.com/profiles/76561199007727047/" className="mx-10">
            <img src="/steam.svg" width="60"></img>
          </a>
          <p className="font-bold">WYLD#0326</p>
        </div>
        
      </div>

    </div>
  )
}
