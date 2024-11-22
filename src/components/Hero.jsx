import image from "/src/img/pfp.png"
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
            <div className="flex flex-col items-center justify-center gap-10 text-white">
                <motion.div
                initial={{y: -50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.2}}
                
                >
                    <img src={image} alt="" className="w-[300px] cursor-pointer rounded-full shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2x1 hover:shadow-indigo-600 md:w-[350px] shadow-xl"/>
                </motion.div>

                <motion.div 
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.2}}
                
                className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
                    <h1 className="bg-gradient-to-r from-sky-300 to-blue-900 bg-clip-text text-transparent text-5xl font-light md:text-7x1">Noel</h1>
                    <h3 className="bg-gradient-to-r from-blue-900 to-sky-300 bg-clip-text text-transparent text-2xl md:text-3x1">Student | Developer | Computer Science</h3>
                    <p className="md:text-base text-pretty text-sm text-gray-400">
                        Hey! My name is Noel, I'm from Hungary and I'm a 15 year old student. I like to play games or code in my freetime. My favourite food is kebab. My dream is to become a Software Engineer or something like that. I have experience in Python, Luau, HTML, CSS.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero