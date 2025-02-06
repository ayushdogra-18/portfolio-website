import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiOutlineGlobal,
} from "react-icons/ai";
import {FaHashnode} from 'react-icons/fa6'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { ViewportProvider } from "../hooks/useViewport";
import { useMediaQuery } from '@react-hook/media-query'; // Import useMediaQuery
import { useEffect } from "react";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.jpg";
// import web20 from "../public/web-20.png"
import web6 from "../public/web6.jpg";
import varun from '../public/profile.jpg'
// import blob1 from "../public/svg/blob1.svg";
// import blob from '../public/svg/'
import Toolkit from "../components/Toolkit";
// import Image from "next/image";
// import { ReactSVG } from "react-svg";
// import Blob1Component from '../public/svg/blob1.svg'
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import ParticlesBackground from "../components/ParticlesBackground";

// Tracing beam
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";

import { WavyBackground } from "../components/ui/wavy-background";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia('(min-width: 768px)').matches);

    const handleRsize = () => {
      setIsDesktop(window.matchMedia('(min-width: 768px)').matches);
    };

    // event listener resize is done
    window.addEventListener('resize', handleRsize);
  }, []);

  const tracingBeamContent = (darkMode) => {
    return (
      <>
        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600  dark:text-teal-400 md:text-6xl font-bold font-burtons">
            Ayush Dogra
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl kanit font-semibold">
            Software Developer
          </h3>
          {/* <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl kanit">
          As an aspiring developer with a fervent passion for <span className="text-teal-600">web development</span>, Apre-final-year Computer Science and Engineering student with a passion for solving complex problems
 and building efficient software solutions. Skilled in full-stack development and eager to contribute to
 impactful projects while expanding my expertise in the field
          </p> */}
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl kanit">
          I am a pre-final-year <span className="text-teal-600">Computer Science and Engineering student</span> and an aspiring <span className="text-teal-600">Software development</span> passionate about solving complex problems and building efficient software solutions. Skilled in full-stack development, I focus on creating impactful, user-centric applications. I’m eager to contribute to innovative projects while expanding my expertise in software development.


          </p>
          <div className="text-5xl flex justify-center sm:gap-16 gap-4 py-3 text-gray-600 dark:text-gray-400">
            <a
              href="https://twitter.com/ayushdogra_18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle className="enlarge" />
            </a>
            <a
              href="https://linkedin.com/in/ayush-dogra-b57445260/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="enlarge" />
            </a>
           
            <a
              href="https://github.com/ayushdogra-18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="enlarge" />
            </a>
            
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 profile">
            <Image 
              src={varun} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg object-cover "
              priority // Preload the image
              // loading="lazy" //  lazy loading attribute
            />
          </div>
        </div>
              
        <section className="py-10">
        
          <div>
            <h3 className="text-3xl py-1 pb-5  dark:text-white font-burtons font-bold">SKILLS</h3>
          </div>
          <div className="pb-8">
            <Toolkit darkMode={darkMode} />
          </div>

          <h3 className="text-3xl pt-1 dark:text-white font-burtons font-bold">PROJECTS</h3>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 relative">
              <div className="group">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                  priority
                />
                <div className="absolute top-4 right-4 flex gap-3">
                  { <a
                    href="https://github.com/ayushdogra-18/chess"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <AiFillGithub
                      className="text-4xl text-white transition-transform duration-300 enlarge-glow-github"
                      title="Github Repo Link"
                    />
                  </a> }
                  {/* <a
                     href="https://compresso.netlify.app/"
                    target="_blank"
                     rel="noopener noreferrer"
                  >
                    TODO: add title
                    <AiOutlineGlobal
                      className="text-4xl transition-transform duration-300 enlarge-glow-global"
                      title=""
                    />
                  </a> */}
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-2/3 bg-black bg-opacity-50 text-white p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ">
                  <h4 className="text-5xl font-bold mb-2 text-teal-300 font-burtons font-bold john">
                    Chess Clone
                  </h4>
                  <p className="text-2xl text-gray-200 font-burtons mayer">
                   a chess game with real-time multiplayer functionality using Socket.IO
 and chess.js. The game supports player-vs-player matches and includes a
 spectator mode.
                  </p>
                </div>
              </div>
            </div>

            <div className="basis-1/3 flex-1 relative">
              <div className="group">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web6}
                  priority
                />
                <div className="absolute top-4 right-4 flex gap-3">
                 



<a
  href="https://github.com/ayushdogra-18/obey-agency-clone"
  target="_blank"
  rel="noopener noreferrer"
>
  <AiFillGithub
    className="text-4xl text-white transition-transform duration-300 enlarge-glow-github"
    title="Github Repo Link"
  />
</a>




                  {/* <a
                    href="https://chatroom-webapp.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineGlobal
                      className="text-4xl transition-transform duration-300 enlarge-glow-global"
                      title=""
                    />
                  </a> */}
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-2/3 bg-black bg-opacity-50 text-white p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <h4 className="text-5xl font-bold mb-2 text-teal-300 font-burtons font-bold john">
                   Obey Agency Clone
                  </h4>
                  <p className="text-2xl text-gray-200 font-burtons mayer">
                  Developed a clone of the Obey Agency website featuring smooth scrolling, GSAP animations, and Locomotive for enhanced user experience and modern design aesthetics.
                  </p>
                </div>
              </div>
            </div>            
            <div className="basis-1/3 flex-1 relative">
              <div className="group">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3}
                  priority
                />
                <div className="absolute top-4 right-4 flex gap-3">
                  <a
                    href="https://github.com/ayushdogra-18/obey-agency-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub
                      className="text-4xl transition-transform duration-300 enlarge-glow-github"
                      title="Github Repo Link"
                    />
                  </a>
                  {/* <a
                    href="https://github.com/arnxv-gupta/Friction"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineGlobal
                      className="text-4xl text-white transition-transform duration-300 enlarge-glow-github"
                      title=""
                    />
                  </a> */}
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-2/3 bg-black bg-opacity-50 text-white p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <h4 className="text-5xl font-bold mb-2 text-teal-300 font-burtons font-bold john">
                   Friction
                  </h4>
                  <p className="text-2xl text-gray-200 font-burtons mayer">
                  Discord-inspired chat application designed for seamless communication. Includes features
                  such as real-time messaging, file uploads, and efficient user management
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1 relative">
              <div className="group">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                  priority
                />
                <div className="absolute top-4 right-4 flex gap-3">
                  <a
                    href="https://github.com/ayushdogra-18/scatch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub
                      className="text-4xl transition-transform duration-300 enlarge-glow-github"
                      title="Github Repo Link"
                    />
                  </a>
                  {/* <a
                    href="https://code-diary.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineGlobal
                      className="text-4xl transition-transform duration-300 enlarge-glow-global"
                      title=""
                    />
                  </a> */}
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-2/3 bg-black bg-opacity-50 text-white p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <h4 className="text-5xl font-bold mb-2 text-teal-300 font-burtons font-bold john">
                    Scatch
                  </h4>
                  <p className="text-2xl text-gray-200 font-burtons mayer">
                  Developed a secure admin panel for a bag e-commerce platform,bag management, pricing updates, and secure access control using JWT and bcrypt authentication.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        <Contact className='pb-10' darkMode={darkMode} />
      </>
    )
  }
  

  return (
    // <>
    <div className={darkMode ? "dark" : ""}>
       {/* <div className="bg-image" style={{
          backgroundImage: `url('../public/svg/grid.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
       </div> */}
      {/* <div className="blob1" >
        <Blob1Component />
      </div> */}
      <Head>
        <title>Ayush Dogra | Software Developer Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/yeet.ico" />
      </Head>
      <ViewportProvider>
        {!darkMode &&  <ParticlesBackground />}
        <main className={`px-10  background ${darkMode ? "bg-slate-900 z-20" : "z-30"} md:px-20 lg:px-40 relative`} >
          <section className="">
            <nav className="py-10 flex justify-between dark:text-white">
              <h1 className="sm:text-sm md:text-base lg:text-2xl font-burtons  font-bold ">developed by ayush</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="/pdf/ayushdograresume.pdf" target="_blank" rel="noopener noreferrer" 
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </section>
          {isDesktop ? (
            <div>
              <TracingBeam>
                {tracingBeamContent(darkMode)}
              </TracingBeam>
            </div>
          ): (
            <div>
              {tracingBeamContent(darkMode)}
            </div>
          )}
        </main>
        <Footer className='' darkMode={darkMode}/>
      </ViewportProvider>
    </div>
  );
}

