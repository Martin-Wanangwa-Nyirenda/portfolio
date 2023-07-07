import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Martin Nyirenda - Portfolio</title>
      </Head>
      <div className="2xl:container bg-[url('/image4.png')] bg-repeat-y bg-cover flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mt-16 w-3/6 bg-gradient-to-r from-zinc-50 to-purple-400 bg-clip-text text-transparent">
          Hi, I'm Martin
        </h1>
        <h1 className="text-6xl font-bold text-center mt-8 w-3/6 bg-gradient-to-br from-zinc-300 to-purple-500 bg-clip-text text-transparent">
          I love coding and solving problems with my skills.
        </h1>
        <button className="border-zinc-50 mt-20 border-2 py-3 px-4 text-lg font-bold rounded-lg hover:bg-sky-500">
          Find out more
        </button>
        <div className="flex justify-between items-center mt-24">
          <div className="border-t-4 border-zinc-50 w-64 mx-4"></div>
          <h1 className="text-zinc-50 text-4xl">My Favourite Projects</h1>
          <div className="border-b-4 border-zinc-50 w-64 mx-4"></div>
        </div>

        <Projects />
        <div className="flex mt-24 items-center">
          <div className="border-t-4 border-zinc-50 w-[800px] mr-8"></div>
          <p className="text-zinc-50 text-3xl w-96 italic">
            you have seen my work, here is what is in my toolbox.
          </p>
        </div>
        <Technologies />

        <div className="flex mt-16 items-center">
          <div className="border-t-4 border-zinc-50 w-[800px] mr-8"></div>
          <p className="text-zinc-50 text-3xl w-96 italic">
            you have seen my work and toolbox. Here, is how you can get in touch
            with me.
          </p>
        </div>
        <Contacts />
      </div>
    </>
  );
}
