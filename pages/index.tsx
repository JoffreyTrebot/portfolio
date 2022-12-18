/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { useRef } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineDown } from "react-icons/ai";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef(null);
  let toTopButton: any;

  if (typeof document !== "undefined") {
    toTopButton = document.getElementById("to-top-button");
  }

  if (typeof window != "undefined") {
    window.onscroll = function () {
      if (toTopButton) {
        if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          toTopButton.classList.remove("hidden");
        } else {
          toTopButton.classList.add("hidden");
        }
      }
    };
  }

  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const scrollToProjectsSection = () =>
    projectsSectionRef.current!.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });

  const scrollToContactSection = () =>
    contactSectionRef.current!.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    const { message, user_email, user_firstname, user_lastname, user_subject } =
      e.target;

    if (
      message.value != "" &&
      user_email.value != "" &&
      user_firstname.value != "" &&
      user_lastname.value != "" &&
      user_subject.value != ""
    ) {
      emailjs
        .sendForm(
          "service_bqjoj7n",
          "template_2a10wvp",
          formRef.current!,
          "qC-wLYJRPgesmHCnx"
        )
        .then(
          (result) => {
            toast.success("Message envoyé !", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          },
          (error) => {
            toast.error("Une erreur s'est produite, veuillez réessayer. !", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        );
    } else {
      toast.error("Vous n'avez pas rempli tous les champs !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div>
      <Head>
        <title>Joffrey Trébot - Développeur Front-End Freelance</title>
        <meta
          name="description"
          content="J'aide les entreprises à atteindre leurs objectifs en réalisant des solutions numériques centrés sur l'utilisateur et son expérience."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
              <a
                href="https://github.com/JoffreyTrebot"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="border border-1 border-black rounded-full text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/joffrey-trébot-a1b324158/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="border border-1 border-black rounded text-3xl" />
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
                <p className="hidden sm:block">Développeur Front-End</p>
                <p className="block sm:hidden">Dev Front-End</p>
              </div>
              <div className="flex  ml-2">
                <p className="border border-1 rounded-lg border-black p-2 font-display sm:text-sm xs:text-xs ">
                  Freelance
                </p>
              </div>
            </div>
            <div className="flex sm:mt-5 xs:mt-2 font-display sm:text-5xl xs:text-4xl">
              <h1>Joffrey Trébot</h1>
            </div>

            <div className="flex mt-5 font-paragraphe sm:text-base xs:text-xs max-w-xl">
              <p>
                J'aide les entreprises à atteindre leurs objectifs en réalisant
                des solutions numériques centrés sur l'utilisateur et son
                expérience.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start sm:mt-10 xs:mt-5">
              <button
                onClick={scrollToContactSection}
                className="border border-1 hover:bg-white relative hover:text-black transition-all border-black font-display px-5 py-2 sm:text-3xl xs:text-2xl bg-black text-white"
              >
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
              <div className="bg-cyan-200 py-2 px-4 rounded-full">React</div>
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

      <div className="flex justify-center sm:mb-2 xs:mt-2">
        <button onClick={scrollToProjectsSection}>
          <AiOutlineDown className="sm:text-3xl xs:text-xl animate-bounce " />
        </button>
      </div>

      <section className="bg-black pb-10 lg:min-h-[30vh] flex flex-col justify-between">
        <p className="flex justify-center font-display text-white pt-4 sm:text-sm xs:text-xs lg:text-lg">
          Ils m'ont fait confiance... pourquoi pas vous ?
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 lg:container lg:mx-auto gap-y-11 lg:gap-y-0 mt-10 lg:mt-0 justify-items-center items-center w-full">
          <picture className="grayscale saturate-200 contrast-50 brightness-200 hover:contrast-0 transition-all">
            <source srcSet="/assets/logo_luxe.png" type="image/png" />
            <img
              src="/assets/logo_luxe.png"
              className="w-40 xs:w-[100px]"
              alt="Logo Luxe."
            />
          </picture>
          <picture className="grayscale contrast-50 hover:contrast-0 transition-all">
            <source srcSet="/assets/logo_sqli.png" type="image/png" />
            <img
              src="/assets/logo_sqli.png"
              className="w-40 xs:w-[100px]"
              alt="Logo SQLI."
            />
          </picture>
          <picture className="grayscale saturate-200 contrast-50 brightness-200 hover:contrast-0 transition-all">
            <source srcSet="/assets/logo_waynna.png" type="image/png" />
            <img
              src="/assets/logo_waynna.png"
              className="w-40 xs:w-[100px]"
              alt="Logo Waynna."
            />
          </picture>
          <picture className="grayscale saturate-200 contrast-50 brightness-200 hover:contrast-0 transition-all">
            <source srcSet="/assets/logo_abeille.png" type="image/png" />
            <img
              src="/assets/logo_abeille.png"
              className="w-40 xs:w-[100px]"
              alt="Logo Abeille Assurance."
            />
          </picture>
          <picture className="grayscale saturate-200 contrast-50 brightness-200 hover:contrast-0 transition-all">
            <source srcSet="/assets/logo_sailcloud.png" type="image/png" />
            <img
              src="/assets/logo_sailcloud.png"
              className="w-40 xs:w-[100px]"
              alt="Logo SAIL.cloud."
            />
          </picture>
          <picture className="grayscale saturate-200 contrast-50 brightness-200 hover:contrast-0 transition-all">
            <source srcSet="/assets/logo_lavgreen.png" type="image/png" />
            <img
              src="/assets/logo_lavgreen.png"
              className="w-40 xs:w-[100px]"
              alt="Logo LavGreen."
            />
          </picture>
        </div>
        <div className="invisible"></div>
      </section>

      <section
        className="min-h-[80vh] container mx-auto px-5 pb-20 lg:px-7 lg:mb-20"
        ref={projectsSectionRef}
      >
        <h2 className="font-display text-center lg:text-left mt-20 text-2xl mb-20 lg:mb-40 lg:mt-40 lg:text-4xl sm:text-3xl">
          Mes récentes réalisations
        </h2>

        <div className="sm:w-[500px] lg:w-full sm:mx-auto">
          <div className="mt-10 lg:flex lg:flex-row lg:gap-x-5 lg:justify-center">
            <div className="border border-1 border-black p-1 mb-2 w-fit">
              <picture>
                <source srcSet="/assets/luxe_project.png" type="image/png" />
                <img
                  src="/assets/luxe_project.png"
                  className="border border-1 border-black lg:w-[35rem]"
                  alt="Screenshot du projet Grand Acteur du Luxe."
                />
              </picture>
            </div>
            <div className="lg:w-[500px] lg:mt-5">
              <h3 className="font-display text-xl lg:text-2xl">
                Grand acteur du luxe Français: Conception et développement d'un
                nouvel intranet
              </h3>
              <p className="font-paragraphe text-xs mt-2 sm:text-base">
                Idéation et conception de tout le visuel du nouvel intranet.
                Puis développement et construction de cet intranet.
              </p>
              <div className="sm:mt-10 xs:mt-7 grid grid-cols-5 sm:gap-2 xs:gap-1 font-display text-center sm:text-xs xs:text-xxs max-w-lg">
                <div className="bg-violet-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  Figma
                </div>
                <div className="bg-yellow-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  LumApps
                </div>
                <div className="bg-orange-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  HTML
                </div>
                <div className="bg-lime-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  CSS
                </div>
                <div className="bg-cyan-200 py-2 px-4 rounded-full">React</div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:flex lg:flex-row lg:gap-x-5 lg:justify-center">
            <div className="border border-1 border-black p-1 mb-2 w-fit">
              <picture>
                <source
                  srcSet="/assets/waynna_site_project.png"
                  type="image/png"
                />
                <img
                  src="/assets/waynna_site_project.png"
                  className="border border-1 border-black lg:w-[35rem]"
                  alt="Screenshot du projet Waynna Website."
                />
              </picture>
            </div>
            <div className="lg:w-[500px] lg:mt-5">
              <h3 className="font-display text-xl lg:text-2xl">
                Waynna: Site internet
              </h3>
              <p className="font-paragraphe text-xs mt-2 sm:text-base">
                Conception des maquettes puis développement d'une page vitrine,
                expliquant la solution, avec un système d'inscription et de
                connexion. Une gestion de compte et de ses paramètres, ainsi
                qu'une gestion de la méthode de paiement.
              </p>
              <div className="sm:mt-10 xs:mt-7 grid grid-cols-5 sm:gap-2 xs:gap-1 font-display text-center sm:text-xs xs:text-xxs max-w-lg">
                <div className="bg-cyan-200 py-2 px-4 rounded-full">React</div>
                <div className="bg-blue-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  MUI
                </div>
                <div className="bg-amber-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  Firebase
                </div>
                <div className="bg-violet-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  Figma
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:flex lg:flex-row lg:gap-x-5 lg:justify-center">
            <div className="border border-1 border-black p-1 mb-2 w-fit">
              <picture>
                <source
                  srcSet="/assets/waynna_app_project.png"
                  type="image/png"
                />
                <img
                  src="/assets/waynna_app_project.png"
                  className="border border-1 border-black lg:w-[35rem]"
                  alt="Screenshot du projet Waynna Application Mobile."
                />
              </picture>
            </div>
            <div className="lg:w-[500px] lg:mt-5">
              <h3 className="font-display text-xl lg:text-2xl">
                Waynna: Application mobile
              </h3>
              <p className="font-paragraphe text-xs mt-2 sm:text-base">
                Conception de toute l'identité visuelle de Waynna, ainsi que les
                maquettes de l'application mobile, puis développement de
                l'application pour iOS et Android avec la gestion de
                l'intégration continue et la mise en production sur les
                différents stores.
              </p>
              <div className="sm:mt-10 xs:mt-7 grid grid-cols-5 sm:gap-2 xs:gap-1 font-display text-center sm:text-xs xs:text-xxs max-w-lg">
                <div className="bg-sky-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  Flutter
                </div>
                <div className="bg-amber-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  Firebase
                </div>
                <div className="bg-violet-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  Figma
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:flex lg:flex-row lg:gap-x-5 lg:justify-center">
            <div className="border border-1 border-black p-1 mb-2 w-fit">
              <picture>
                <source
                  srcSet="/assets/portfolio_project.png"
                  type="image/png"
                />
                <img
                  src="/assets/portfolio_project.png"
                  className="border border-1 border-black lg:w-[35rem]"
                  alt="Screenshot du projet Portfolio."
                />
              </picture>
            </div>
            <div className="lg:w-[500px] lg:mt-5">
              <h3 className="font-display text-xl lg:text-2xl">
                Joffrey: Portfolio
              </h3>
              <p className="font-paragraphe text-xs mt-2 sm:text-base">
                Réflexion et conception de l'identité visuelle de mon portfolio
                avant le développement. Puis développement de la page en suivant
                la maquette.
              </p>
              <div className="sm:mt-10 xs:mt-7 grid grid-cols-5 sm:gap-2 xs:gap-1 font-display text-center sm:text-xs xs:text-xxs max-w-lg">
                <div className="bg-cyan-200 py-2 px-4 rounded-full">React</div>
                <div className="bg-stone-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  NextJS
                </div>
                <div className="bg-teal-200 py-2 sm:px-4 xs:px-2 rounded-full ">
                  Tailwind
                </div>
                <div className="bg-violet-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  Figma
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:flex lg:flex-row lg:gap-x-5 lg:justify-center">
            <div className="border border-1 border-black p-1 mb-2 w-fit">
              <picture>
                <source
                  srcSet="/assets/lavgreen_project.png"
                  type="image/png"
                />
                <img
                  src="/assets/lavgreen_project.png"
                  className="border border-1 border-black lg:w-[35rem]"
                  alt="Screenshot du projet LavGreen."
                />
              </picture>
            </div>
            <div className="lg:w-[500px] lg:mt-5">
              <h3 className="font-display text-xl lg:text-2xl">
                LavGreen: Refonte du site internet
              </h3>
              <p className="font-paragraphe text-xs mt-2 sm:text-base">
                Refonte totale du site internet qui devenait vieillissant, en
                apportant de la modernité, et en y développant aussi une
                solution d'interface administrateur pour la gestion des prix.
              </p>
              <div className="sm:mt-10 xs:mt-7 grid grid-cols-5 sm:gap-2 xs:gap-1 font-display text-center sm:text-xs xs:text-xxs max-w-lg">
                <div className="bg-orange-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  HTML
                </div>
                <div className="bg-pink-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  XD
                </div>
                <div className="bg-lime-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  CSS
                </div>
                <div className="bg-purple-200 py-2 sm:px-4 xs:px-2 rounded-full">
                  Bootstrap
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[100vh] bg-black" ref={contactSectionRef}>
        <div className="container mx-auto px-5 pb-20 lg:px-7">
          <h2 className="font-display text-center lg:text-left pt-20 text-2xl mb-20 lg:pt-40 lg:text-4xl sm:text-3xl text-white">
            Rencontrons-nous
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:justify-around lg:items-center">
            <form
              className="w-full max-w-lg font-paragraphe"
              onSubmit={sendEmail}
              ref={formRef}
            >
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-2">
                  <label
                    className="block tracking-wide text-white text-xs mb-2"
                    htmlFor="grid-nom"
                  >
                    Nom
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-black  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-nom"
                    type="text"
                    name="user_lastname"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-2">
                  <label
                    className="block tracking-wide text-white text-xs mb-2"
                    htmlFor="grid-prenom"
                  >
                    Prénom
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-black py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-prenom"
                    name="user_firstname"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-white text-xs mb-2"
                    htmlFor="grid-email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-black  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="text"
                    name="user_email"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-white text-xs mb-2"
                    htmlFor="grid-subject"
                  >
                    Sujet
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-subject"
                    type="text"
                    name="user_subject"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="appearance-none block w-full h-48 bg-gray-200 text-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <button
                    className="appearance-none block w-full bg-black text-white font-display py-3 px-4 mb-3 border border-1 border-white hover:border-black hover:bg-white hover:text-black transition-all"
                    type="submit"
                    value="Send"
                  >
                    Envoyer
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </form>

            <div className="mt-5 sm:mt-10 sm:pb-10 lg:mt-0">
              <div className="flex flex-col lg:justify-center">
                <div className="flex justify-center">
                  <picture className="border-2 border-white rounded-full p-1">
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
                <div className="lg:flex lg:flex-col">
                  <div className="flex flex-col items-center mt-5">
                    <div className="flex lg:mt-0 font-display sm:text-5xl text-white xs:text-4xl">
                      <p>Joffrey Trébot</p>
                    </div>

                    <div className="flex mt-7 text-white">
                      <div className="flex border border-1 rounded-lg border-white  p-2 font-display sm:text-sm xs:text-xs">
                        <p>Développeur Front-End</p>
                      </div>
                      <div className="flex ml-2">
                        <p className="border border-1 rounded-lg border-white p-2 font-display sm:text-sm xs:text-xs">
                          Freelance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button
        id="to-top-button"
        onClick={goToTop}
        className="hidden fixed z-90 bottom-8 right-8 w-16 h-16 rounded-full drop-shadow-md bg-black border border-1 border-white text-white text-3xl font-bold"
      >
        &uarr;
      </button>
    </div>
  );
}
