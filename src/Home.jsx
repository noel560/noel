import { useState } from 'react'
import bgImage from './assets/1.png'
import pfp from './assets/temppfp.png'
import './Home.css'
import { BiLogoCss3, BiLogoDiscord, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoPython, BiLogoTailwindCss, BiLogoTwitter, BiLogoTypescript } from "react-icons/bi"
import { FaReact, FaEnvelope } from "react-icons/fa"
import { TbBrandCpp } from "react-icons/tb"
import { FaSquareXTwitter } from "react-icons/fa6"
import { SiLua } from "react-icons/si"
import { CiMapPin } from "react-icons/ci"

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return <>
        <div className="fixed top-0 left-0 w-full h-full bg-cover opacity-25 blur-[2px] -z-10" style={{ backgroundImage: `url(${bgImage})` }} draggable="false" onDragStart={() => false} onContextMenu={() => false}></div>
        <nav className="bg-transparent">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={menuOpen} id="mobile-menu-button" onClick={toggleMenu}>
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            <svg className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="/" className="rounded-md bg-neutral-900/50 border-2 border-neutral-800/50 px-3 py-2 text-lg font-medium text-white" aria-current="page">Home</a>
                                <a href="/noel/about" className="rounded-md hover:bg-neutral-900/50 px-3 py-2 text-lg font-medium text-white transition-all">About</a>
                                <a href="/noel/projects" className="rounded-md px-3 py-2 text-lg font-medium text-white hover:bg-neutral-900/50 transition-all">Projects</a>
                                <a href="/noel/contact" className="rounded-md px-3 py-2 text-lg font-medium text-white hover:bg-neutral-900/50 transition-all">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'} z-20`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2 z-20">
                    <a href="/" className="block rounded-md bg-neutral-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</a>
                    <a href="/noel/about" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-neutral-900 transition-all">About</a>
                    <a href="/noel/projects" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-neutral-900 transition-all">Projects</a>
                    <a href="/noel/contact" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-neutral-900 transition-all">Contact</a>
                </div>
            </div>
        </nav>

        <div className="flex flex-col relative items-center justify-center mt-10 px-4 sm:px-6 lg:px-8 bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg shadow-lg w-full max-w-2xl mx-auto py-5">
            <div className="text-white text-[2.5rem] gap-1 flex flex-col items-end absolute top-0 right-0 mr-4 mt-4">
                <a href="https://github.com/noel560"><BiLogoGithub className="p-2 transition duration-500 hover:scale-90 hover:bg-neutral-800/50 cursor-pointer bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg shadow-lg" /></a>
                <a href="mailto:noel540715@gmail.com"><FaEnvelope className="p-2 transition duration-500 hover:scale-90 hover:bg-neutral-800/50 cursor-pointer bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg shadow-lg" /></a>
                <a href="https://x.com/Noel54_"><FaSquareXTwitter className="p-2 transition duration-500 hover:scale-90 hover:bg-neutral-800/50 cursor-pointer bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg shadow-lg" /></a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center">
                <img src={pfp} alt="Noel" className="rounded-full w-24 h-24 sm:w-30 sm:h-30 border-2 border-neutral-800/50 cursor-pointer hover:animate-spin" draggable="false" onDragStart={() => false} onContextMenu={() => false}></img>
                <div className="flex flex-col ml-0 sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
                    <h1 className="text-3xl sm:text-5xl font-bold text-white">Noel</h1>
                    <p className="text-md sm:text-lg text-gray-300">C++ Developer</p>
                    <div className="flex flex-row items-center justify-center sm:justify-start">
                        <p className="text-md sm:text-lg text-gray-300">
                            <span className="inline-flex items-center gap-1"><CiMapPin/>Hungary</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-white mt-6 sm:mt-10 max-w-2xl text-justify sm:text-left">
                {/*<p>I'm a 15-year-old developer with experience in <span className="bg-neutral-700" style={{ fontWeight: 700 }}>web development</span>, but my main focus is on <span className="bg-neutral-700" style={{ fontWeight: 700 }}>C++</span>. I'm passionate about creating optimized solutions and continuously improving my skills in both web and system programming.</p>*/}
                <p>Hi, I'm a 15-year-old developer passionate about technology. I'm currently learning <span className="bg-neutral-700" style={{ fontWeight: 700 }}>C++</span> and <span className="bg-neutral-700" style={{ fontWeight: 700 }}>Python</span>, aiming to pursue a career in software/game development or cybersecurity. Always eager to build, break, and learn more!</p>
            </div>

            <div className="flex flex-col gap-4 justify-center mt-6 sm:mt-10 text-white items-center">
                <h1 className="text-2xl text-left sm:text-4xl">What I work with</h1>
                <div className="text-white text-6xl flex gap-2 flex-wrap justify-center">
                    <TbBrandCpp className="hover:text-gray-300 hover:scale-90 transition-all cursor-pointer duration-500" />
                    <BiLogoPython className="hover:text-gray-300 hover:scale-90 transition-all cursor-pointer duration-500" />
                    <BiLogoCss3 className="hover:text-gray-300 hover:scale-90 transition-all cursor-pointer duration-500" />
                    <BiLogoHtml5 className="hover:text-gray-300 hover:scale-90 transition-all cursor-pointer duration-500" />
                    <BiLogoTailwindCss className="hover:text-gray-300 hover:scale-90 transition-all cursor-pointer duration-500" />
                    <SiLua className="hover:text-gray-300 hover:scale-90 transition-all cursor-pointer duration-500" />
                </div>
            </div>

            <div className="text-white flex flex-col gap-4 justify-center mt-6 sm:mt-10">
                <h1 className="text-2xl text-center sm:text-4xl">Featured Projects</h1>

                <div className="bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg shadow-lg p-4 w-full flex flex-col sm:flex-row items-center justify-center">
                    <div className="flex flex-col sm:mr-4 mb-4 sm:mb-0 sm:w-1/2">
                        <img src={bgImage} alt="Project Image" className="rounded-lg w-full h-48 sm:h-48 object-cover mb-4 cursor-pointer" />
                        <button className="bg-neutral-900/50 border-2 border-neutral-800/50 text-white py-2 px-4 rounded hover:bg-neutral-800/50 transition duration-300 w-full sm:w-auto cursor-pointer">Read More</button>
                    </div>
                    <div className="flex flex-col text-center sm:text-left sm:w-1/2">
                        <h1 className="text-3xl font-bold mb-2">Project Name</h1>
                        <p className="text-gray-300 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati nisi mollitia quae quidem consequatur, esse laboriosam ex earum voluptates assumenda exercitationem facilis perspiciatis odio dolores? Corrupti enim aspernatur tenetur!</p>
                        <div className="flex flex-row gap-2 justify-center sm:justify-start mt-2 items-center">
                            <span className='bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><FaReact /></span>
                            <span className='bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><BiLogoTailwindCss /></span>
                            <span className='bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><BiLogoHtml5 /></span>
                            <span className='bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><BiLogoCss3 /></span>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg shadow-lg p-4 w-full flex flex-col sm:flex-row items-center justify-center">
                    <div className="flex flex-col sm:mr-4 mb-4 sm:mb-0 sm:w-1/2">
                        <img src={bgImage} alt="Project Image" className="rounded-lg w-full h-48 sm:h-48 object-cover mb-4 cursor-pointer" />
                        <button className="bg-neutral-900/50 border-2 border-neutral-800/50 text-white py-2 px-4 rounded hover:bg-neutral-800/50 transition duration-300 w-full sm:w-auto cursor-pointer">Read More</button>
                    </div>
                    <div className="flex flex-col text-center sm:text-left sm:w-1/2">
                        <h1 className="text-3xl font-bold mb-2">Project Name</h1>
                        <p className="text-gray-300 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati nisi mollitia quae quidem consequatur, esse laboriosam ex earum voluptates assumenda exercitationem facilis perspiciatis odio dolores? Corrupti enim aspernatur tenetur!</p>
                        <div className="flex flex-row gap-2 justify-center sm:justify-start mt-2 items-center">
                            <span className='bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'>HTML</span>
                            <span className='bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'>Tailwind</span>
                            <span className='bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'>React</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default App