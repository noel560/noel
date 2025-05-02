import { useState } from 'react'
import bgImage from './assets/1.png'
import './Home.css'
import { Link } from "react-router-dom"
import { BiLogoDiscord, BiLogoGithub } from "react-icons/bi"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return <>
        <div className="fixed top-0 left-0 w-full h-full bg-cover opacity-25 blur-[2px] -z-10" style={{ backgroundImage: `url(${bgImage})` }} draggable="false" onDragStart={() => false} onContextMenu={() => false}>
            <div className='absolute inset-0 bg-black opacity-40'></div>
        </div>
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
                                <Link to="/" className="rounded-md px-3 py-2 text-lg font-medium text-white hover:bg-neutral-900/50 transition-all">Home</Link>
                                <Link to="/about" className="rounded-md hover:bg-neutral-900/50 px-3 py-2 text-lg font-medium text-white transition-all">About</Link>
                                <Link to="/projects" className="rounded-md px-3 py-2 text-lg font-medium text-white hover:bg-neutral-900/50 transition-all">Projects</Link>
                                <Link to="/contact" className="rounded-md bg-neutral-900/50 border-2 border-neutral-800/50 px-3 py-2 text-lg font-medium text-white" aria-current="page">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'} z-20`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2 z-20">
                    <Link to="/" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-neutral-900 transition-all">Home</Link>
                    <Link to="/about" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-neutral-900 transition-all">About</Link>
                    <Link to="/projects" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-neutral-900 transition-all">Projects</Link>
                    <Link to="/contact" className="block rounded-md bg-neutral-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Contact</Link>
                </div>
            </div>
        </nav>

        {/* Main */}
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col relative items-center justify-center mt-10 px-4 sm:px-6 lg:px-8 bg-neutral-900/50 border-2 border-neutral-800/50 rounded-2xl shadow-xl w-full max-w-2xl mx-auto py-5"
        >
            <h1 className="text-white text-3xl">Contact</h1>
            <p className="text-white text-lg text-center mt-4 mb-6">
                Feel free to reach out through any of the platforms below. <br />
                I’ll get back to you as soon as I can!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                <a href="https://discord.com/users/1126931627059195956" target="_blank">
                    <div className="flex flex-col items-center bg-neutral-800/50 rounded-xl p-4 hover:bg-neutral-800 transition-all cursor-pointer">
                        <BiLogoDiscord size={32} className='text-white' />
                        <h2 className="mt-2 text-white font-medium">Discord</h2>
                        <p className="text-neutral-300">noel54_</p>
                    </div>
                </a>

                <a href="mailto:noel540715@gmail.com" target="_blank">
                    <div className="flex flex-col items-center bg-neutral-800/50 rounded-xl p-4 hover:bg-neutral-800 transition-all cursor-pointer">
                        <FaEnvelope size={28} className='text-white' />
                        <h2 className="mt-2 text-white font-medium">Email</h2>
                        <p className="text-neutral-300">noel540715@gmail.com</p>
                    </div>
                </a>

                <a href="https://x.com/Noel54_" target="_blank">
                    <div className="flex flex-col items-center bg-neutral-800/50 rounded-xl p-4 hover:bg-neutral-800 transition-all cursor-pointer">
                        <FaSquareXTwitter size={28} className='text-white' />
                        <h2 className="mt-2 text-white font-medium">Twitter</h2>
                        <p className="text-neutral-300">@Noel54_</p>
                    </div>
                </a>

                <a href="https://github.com/noel560" target="_blank">
                    <div className="flex flex-col items-center bg-neutral-800/50 rounded-xl p-4 hover:bg-neutral-800 transition-all cursor-pointer">
                        <BiLogoGithub size={28} className='text-white' />
                        <h2 className="mt-2 text-white font-medium">GitHub</h2>
                        <p className="text-neutral-300">noel560</p>
                    </div>
                </a>
            </div>
        </motion.div>

    </>;
}

export default App