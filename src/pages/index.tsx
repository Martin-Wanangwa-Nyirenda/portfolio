import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";
import Head from "next/head";
import { useRef } from "react";

export default function Home() {
  const sectionRef = useRef<HTMLParagraphElement>(null);

  const handleButtonClick = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Head>
        <title>Martin Nyirenda - Portfolio</title>
      </Head>
      <main className="bg-[url('/image3.png')] bg-cover flex items-center justify-center w-full">
        <div className="container max-w-7xl mx-auto">
          <section className="flex flex-col justify-center items-center mt-8 md:mt-24">
            <h1 className="text-2xl font-bold md:text-4xl lg:text-4xl  text-center mt-16 w-3/6 bg-gradient-to-r from-zinc-50 to-purple-400 bg-clip-text text-transparent">
              Hi, I&apos;m Martin
            </h1>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-center mt-8 xl:w-3/6 md:w-3/4 sm:w-3/4 lg:w-3/6 bg-gradient-to-br from-zinc-300 to-purple-500 bg-clip-text text-transparent">
              I love coding and solving problems with my skills.
            </h1>
            <button
              onClick={() => handleButtonClick()}
              className="border-zinc-50 mt-20 border-2 py-3 px-4 font-bold rounded-lg hover:bg-sky-500 text-sm md:text-lg lg:text-lg"
            >
              Get in touch
            </button>
          </section>
          <div className="flex justify-between items-center mt-24">
            <div className="w-0 flex-grow border-t-4  mx-4 border-zinc-50"></div>
            <h1 className="flex-grow-0 text-zinc-50 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              My Favourite Projects
            </h1>
            <div className="flex-grow w-0 border-t-4 border-zinc-50 mx-4"></div>
          </div>
          <Projects />
          <div className="flex mt-24 items-center">
            <div className="hidden md:block border-t-4 mr-8 w-full"></div>
            <p className="text-zinc-50 md:w-96 italic text-2xl md:text-4xl lg:text-4xl  xl:w-3/4 text-center mx-auto">
              you have seen my work, here is what is in my toolbox.
            </p>
          </div>
          <Technologies />
          <div className="flex mt-16 items-center">
            <div className="hidden md:block border-t-4 mr-8 w-full"></div>
            <p
              ref={sectionRef}
              className="text-zinc-50 md:w-96 italic text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:w-3/4 text-center"
            >
              you have seen my work and toolbox. Here, is how you can get in
              touch with me.
            </p>
          </div>
          <Contacts />
        </div>
      </main>
    </>
  );
}
