/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineDown } from "react-icons/ai";

export default function Home() {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  const scrollToNextSection = () =>{
    window.scrollTo({
      top: 800, 
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div>
      <Head>
        <title>Joffrey Trébot - Développeur Front-End Freelance</title>
        <meta
          name="description"
          content="J'aide les entreprises à atteindre leurs objectifs en concevant et en créant des produits numériques centrés sur l'utilisateur et son expérience."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="sticky top-0 z-50 bg-white">
        <nav className="px-7 sm:px-10 sm:py-8 xs:py-5 container mx-auto">
          <div className="container flex flex-wrap items-center justify-between">
            <a className="flex items-start" onClick={scrollToTop}>
              <picture className="block sm:hidden">
                <source srcSet="/assets/logo_mobile.png" type="image/png" />
                <img
                  src="/assets/logo_mobile.png"
                  className="h-7"
                  alt="Logo avec la lettre J en majuscule, suivi d'un point virugule de couleur vert."
                />
              </picture>
              <picture className="hidden sm:block">
                <source srcSet="/assets/logo.png" type="image/png" />
                <img
                  src="/assets/logo.png"
                  className="h-7"
                  alt="Logo nommée Joffrey en lettre capitable suivi d'un point virgule de couleur vert."
                />
              </picture>
            </a>
            <div className="flex gap-5">
              <a href="https://github.com/JoffreyTrebot" target="_blank" rel="noreferrer">
                <AiFillGithub className="border border-1 border-black rounded-full text-3xl"/>
              </a>
              <a href="https://www.linkedin.com/in/joffrey-trébot-a1b324158/" target="_blank" rel="noreferrer">
                <AiFillLinkedin className="border border-1 border-black rounded text-3xl"/>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex flex-col min-h-[77vh] container mx-auto px-7 sm:px-20 md:px-40 xl:px-60 lg:justify-center">
        <div className="lg:flex lg:flex-row lg:justify-center">
          <div className="flex justify-center lg:items-start">
            <picture className="border-2 border-black rounded-full p-1">
              <source
                srcSet="/assets/picture_of_me.jpg"
                type="image/jpg"
                className="rounded-full"
              />
              <img
                src="/assets/picture_of_me.jpg"
                className="rounded-full w-40 xs:w-[120px]"
                alt="Photo de profil représentant Joffrey Trébot."
              />
            </picture>
          </div>
          <div className="lg:flex lg:flex-col lg:ml-10">
            <div className="flex flex-row items-center mt-5">
              <div className="flex lg:mt-0 font-display sm:text-5xl xs:text-4xl">
                <p>Je suis</p>
              </div>
              <div className="flex ml-5 border border-1 rounded-lg border-black p-2 font-display sm:text-sm xs:text-xs">
                <p className="hidden sm:block">
                  Développeur Front-End
                </p>
                <p className="block sm:hidden">
                  Dev Front-End
                </p>
              </div>
              <div className="flex  ml-2">
                <p className="border border-1 rounded-lg border-black p-2 font-display text-sm xs:text-xs ">
                  Freelance
                </p>
              </div>
            </div>
            <div className="flex sm:mt-5 xs:mt-2 font-display sm:text-5xl xs:text-4xl">
              <h1>Joffrey Trébot</h1>
            </div>

            <div className="flex mt-5 font-paragraphe sm:text-sm xs:text-xs max-w-xl">
              <p>
                J'aide les entreprises à atteindre leurs objectifs en concevant
                et en créant des produits numériques centrés sur l'utilisateur
                et son expérience.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start sm:mt-10 xs:mt-5">
              <button className="border border-1 hover:bg-white relative hover:text-black transition-all border-black font-display px-5 py-2 sm:text-3xl xs:text-2xl bg-black text-white">
                Contactez-moi
                <picture className="absolute sm:top-10 xs:top-8 right-0">
                  <source srcSet="/assets/mouse.png" type="image/png" />
                  <img
                    src="/assets/mouse.png"
                    className="w-6"
                    alt="Image représentant un curseur de souris."
                  />
                </picture>
              </button>
            </div>
            <div className="sm:mt-10 xs:mt-7 grid grid-cols-5 sm:gap-2 xs:gap-1 font-display text-center sm:text-xs xs:text-xxs max-w-lg">
              <div className="bg-cyan-200 py-2 px-4 rounded-full">
                React
              </div>
              <div className="bg-sky-200 py-2 sm:px-4 xs:px-2 rounded-full">
                Flutter
              </div>
              <div className="bg-amber-200 py-2 sm:px-4 xs:px-2 rounded-full">
                Firebase
              </div>
              <div className="bg-violet-200 py-2 sm:px-4 xs:px-2 rounded-full">
                Figma
              </div>
              <div className="bg-green-200 py-2 sm:px-4 xs:px-2 rounded-full">
                NodeJS
              </div>
              <div className="bg-teal-200 py-2 sm:px-4 xs:px-2 rounded-full ">
                Tailwind
              </div>
              <div className="bg-pink-200 py-2 sm:px-4 xs:px-2 rounded-full">
                XD
              </div>
              <div className="bg-stone-200  py-2 sm:px-4 xs:px-2 rounded-full">
                Azure
              </div>
              <div className="bg-purple-200 col-span-2  py-2 sm:px-4 xs:px-2 rounded-full">
                Bootstrap
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="flex justify-center sm:mb-2 xs:mb-1">
        <button onClick={scrollToNextSection}>
          <AiOutlineDown className="sm:text-3xl xs:text-xl animate-bounce " />
        </button>
      </div>

      <section className="flex bg-black min-h-[80vh] justify-center">
        <p className="font-display text-white mt-4 sm:text-sm xs:text-xs">
          Ils m'ont fait confiance... pourquoi pas vous ?
        </p>
      </section>
    </div>
  );
}
