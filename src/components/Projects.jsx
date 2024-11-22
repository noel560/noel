import ananas from "/src/img/ananas.png";
import multiapp from "/src/img/multiapp.png";
import { motion } from "framer-motion";

const projectsData = [
    {
        image: multiapp,
        title: "Multi App Downloader",
        description: "mappX is an application that can download a load of applicatons with one click.",
        href: "https://github.com/noel560/MultiAppDownloader/releases",
        readmore: "Download",
        technologies: ["C#"],
    },
    {
        image: ananas,
        title: "Ananas Discord Bot",
        description: "Ananas was an useful discord bot with many commands.",
        technologies: ["Node.js"],
    },
]

const ScrollReveal = ({children}) => {
    return (
        <motion.div
        initial={{opacity:0, y:100}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}
        >
            {children}
        </motion.div>
    )
}

const ProjectCard = ({project}) => {
    return (
        <ScrollReveal>
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
            <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"/>

            <div className="flex flex-col gap-5">

                <div className="flex flex-col gap-3">
                    <div className="text-x1 font-semibold">{project.title}</div>
                    <p className="text-gray-400">{project.description}</p> <a href={project.href}><p>{project.readmore}</p></a>
                </div>

                <div className="flex flex-wrap gap-5">
                    {
                        project.technologies.map((tech, index) => (
                            <span key={index} className="rounded-lg bg-black p-3">
                                {tech}
                            </span>
                        ))
                    }
                </div>
                
            </div>
        </div>
        </ScrollReveal>
    )
}

const Projects = () => {
return (
        <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">

            <ScrollReveal>
                <h1 className="text-4xl font-light text-white md:text-6x2">My Projects</h1>
            </ScrollReveal>

            <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
                {
                    projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects