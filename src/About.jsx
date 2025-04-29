import { useState } from 'react'
import bgImage from './assets/1.png'
import './Home.css'
import { Link } from "react-router-dom"
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
                                <Link to="/about" className="rounded-md bg-neutral-900/50 border-2 border-neutral-800/50 px-3 py-2 text-lg font-medium text-white" aria-current="page">About</Link>
                                <Link to="/projects" className="rounded-md px-3 py-2 text-lg font-medium text-white hover:bg-neutral-900/50 transition-all">Projects</Link>
                                <Link to="/contact" className="rounded-md px-3 py-2 text-lg font-medium text-white hover:bg-neutral-900/50 transition-all">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'} z-20`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2 z-20">
                    <Link to="/" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-neutral-900 transition-all">Home</Link>
                    <Link to="/about" className="block rounded-md bg-neutral-900 px-3 py-2 text-base font-medium text-white" aria-current="page">About</Link>
                    <Link to="/projects" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-neutral-900 transition-all">Projects</Link>
                    <Link to="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-neutral-900 transition-all">Contact</Link>
                </div>
            </div>
        </nav>

        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }} className="flex flex-col relative items-center justify-center mt-10 px-4 sm:px-6 lg:px-8 bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg shadow-lg w-full max-w-2xl mx-auto py-5">
            <h1 className='text-white text-3xl'>About Me</h1>

            <p className='text-white text-lg mt-4'>I'm a developer from Hungary with a strong curiosity for how things work under the hood. Currently diving deep into <span className="bg-neutral-700" style={{ fontWeight: 700 }}>C++</span> and <span className="bg-neutral-700" style={{ fontWeight: 700 }}>Python</span>, with the goal of building a career in software development, game programming, or cybersecurity.</p>
            <p className='text-white text-lg mt-4'>I have experience in <span className="bg-neutral-700" style={{ fontWeight: 700 }}>web development</span>, though it's not the field I want to pursue long-term. I'm much more passionate about building systems, games, or exploring the world of cybersecurity.</p>
            <p className='text-white text-lg mt-4'>I’m on a journey to become a well-rounded developer, and plan to explore <span className="bg-neutral-700" style={{ fontWeight: 700 }}>Rust</span>, <span className="bg-neutral-700" style={{ fontWeight: 700 }}>Bash</span> scripting, and <span className="bg-neutral-700" style={{ fontWeight: 700 }}>C</span> in the near future.</p>
        
            <hr className='border-neutral-800/50 w-full mt-8 rounded-full border-1' />

            <h1 className='text-white mt-4 text-2xl'>How It Started</h1>

            <p className='text-white text-lg mt-4'>My journey into development began around 2020-2021, when I started making Minecraft servers and experimenting with plugins. As the years went on, web development became more and more relevant, and I naturally picked up <span className="bg-neutral-700" style={{ fontWeight: 700 }}>HTML</span> and <span className="bg-neutral-700" style={{ fontWeight: 700 }}>CSS</span> along the way.</p>
            <p className='text-white text-lg mt-4'>From 2020 to 2025, I worked on a few smaller projects here and there like <span className="bg-neutral-700" style={{ fontWeight: 700 }}>Java MC plugins</span> and websites but I never fully dove into deep programming until now.</p>
            <p className='text-white text-lg mt-4'>In 2025, I decided to take a big step forward and started learning <span className="bg-neutral-700" style={{ fontWeight: 700 }}>C++</span> and <span className="bg-neutral-700" style={{ fontWeight: 700 }}>Python</span>, with a focus on system programming and game development.
            I'm excited for the challenges ahead and looking forward to building something even bigger.</p>

        </motion.div>
    </>;
}

export default App