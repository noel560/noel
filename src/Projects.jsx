import { useState } from 'react'
import bgImage from './assets/1.png'
import './Home.css'
import { Link } from "react-router-dom"
import { BiLogoCss3, BiLogoHtml5, BiLogoPython, BiLogoTailwindCss } from "react-icons/bi"
import { FaReact } from "react-icons/fa"
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
                                <Link to="/projects" className="rounded-md bg-neutral-900/50 border-2 border-neutral-800/50 px-3 py-2 text-lg font-medium text-white" aria-current="page">Projects</Link>
                                <Link to="/contact" className="rounded-md hover:bg-neutral-900/50 px-3 py-2 text-lg font-medium text-white transition-all">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'} z-20`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2 z-20">
                    <Link to="/" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-neutral-900 transition-all">Home</Link>
                    <Link to="/about" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-neutral-900 transition-all">About</Link>
                    <Link to="/projects" className="block rounded-md bg-neutral-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Projects</Link>
                    <Link to="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-neutral-900 transition-all">Contact</Link>
                </div>
            </div>
        </nav>

        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col relative items-center justify-center mt-10 px-4 sm:px-6 lg:px-8 bg-neutral-900/50 border-2 border-neutral-800/50 rounded-2xl shadow-lg w-full max-w-2xl mx-auto py-5"
        >
            <h1 className='text-white text-3xl'>Projects</h1>

            {/* Project 1 */}
            <div className="bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg shadow-lg p-4 w-full flex flex-col sm:flex-row items-center justify-center mt-8">
                <div className="flex flex-col sm:mr-4 mb-4 sm:mb-0 sm:w-1/2">
                    <img src={bgImage} alt="Project Image" className="rounded-lg w-full h-48 sm:h-48 object-cover mb-4 cursor-pointer" />
                    <button className="bg-neutral-900/50 border-2 border-neutral-800/50 text-white py-2 px-4 rounded hover:bg-neutral-800/50 transition duration-300 w-full sm:w-auto cursor-pointer">Read More</button>
                </div>
                <div className="flex flex-col text-center sm:text-left sm:w-1/2">
                    <h1 className="text-white text-3xl font-bold mb-2">Project Name</h1>
                    <p className="text-gray-300 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati nisi mollitia quae quidem consequatur, esse laboriosam ex earum voluptates assumenda exercitationem facilis perspiciatis odio dolores? Corrupti enim aspernatur tenetur!</p>
                    <div className="flex flex-row gap-2 justify-center sm:justify-start mt-2 items-center">
                        <span className='text-white bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><FaReact /></span>
                        <span className='text-white bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><BiLogoTailwindCss /></span>
                        <span className='text-white bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><BiLogoHtml5 /></span>
                        <span className='text-white bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><BiLogoCss3 /></span>
                    </div>
                </div>
            </div>

            {/* Project 2 */}
            <div className="bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg shadow-lg p-4 w-full flex flex-col sm:flex-row items-center justify-center mt-8">
                <div className="flex flex-col sm:mr-4 mb-4 sm:mb-0 sm:w-1/2">
                    <img src={bgImage} alt="Project Image" className="rounded-lg w-full h-48 sm:h-48 object-cover mb-4 cursor-pointer" />
                    <button className="bg-neutral-900/50 border-2 border-neutral-800/50 text-white py-2 px-4 rounded hover:bg-neutral-800/50 transition duration-300 w-full sm:w-auto cursor-pointer">Read More</button>
                </div>
                <div className="flex flex-col text-center sm:text-left sm:w-1/2">
                    <h1 className="text-white text-3xl font-bold mb-2">Project Name</h1>
                    <p className="text-gray-300 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati nisi mollitia quae quidem consequatur, esse laboriosam ex earum voluptates assumenda exercitationem facilis perspiciatis odio dolores? Corrupti enim aspernatur tenetur!</p>
                    <div className="flex flex-row gap-2 justify-center sm:justify-start mt-2 items-center">
                        <span className='text-white bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><FaReact /></span>
                        <span className='text-white bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><BiLogoTailwindCss /></span>
                        <span className='text-white bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><BiLogoHtml5 /></span>
                        <span className='text-white bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><BiLogoCss3 /></span>
                    </div>
                </div>
            </div>

            {/* Project 3 */}
            <div className="bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg shadow-lg p-4 w-full flex flex-col sm:flex-row items-center justify-center mt-8">
                <div className="flex flex-col sm:mr-4 mb-4 sm:mb-0 sm:w-1/2">
                    <img src={bgImage} alt="Project Image" className="rounded-lg w-full h-48 sm:h-48 object-cover mb-4 cursor-pointer" />
                    <button className="bg-neutral-900/50 border-2 border-neutral-800/50 text-white py-2 px-4 rounded hover:bg-neutral-800/50 transition duration-300 w-full sm:w-auto cursor-pointer">Read More</button>
                </div>
                <div className="flex flex-col text-center sm:text-left sm:w-1/2">
                    <h1 className="text-white text-3xl font-bold mb-2">Project Name</h1>
                    <p className="text-gray-300 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati nisi mollitia quae quidem consequatur, esse laboriosam ex earum voluptates assumenda exercitationem facilis perspiciatis odio dolores? Corrupti enim aspernatur tenetur!</p>
                    <div className="flex flex-row gap-2 justify-center sm:justify-start mt-2 items-center">
                        <span className='text-white bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><FaReact /></span>
                        <span className='text-white bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><BiLogoTailwindCss /></span>
                        <span className='text-white bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><BiLogoHtml5 /></span>
                        <span className='text-white bg-neutral-900/50 border-2 border-neutral-800/50 rounded-lg p-1'><BiLogoCss3 /></span>
                    </div>
                </div>
            </div>
        </motion.div>
    </>;
}

export default App