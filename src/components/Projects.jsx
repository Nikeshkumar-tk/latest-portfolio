import { motion } from "framer-motion"

const Projects = () => {
    const projectData = [
        {
            projectName: "Hulu Clone",
            imgUrl: "src/assets/huluv1.png",
        },
        {
            projectName: "Netflix Clone",
            imgUrl: "src/assets/netflix.png"
        },
        {
            projectName: "Full Stack Blog App",
            imgUrl: "src/assets/blog.png"
        },
        {
            projectName: "E-waste management System",
            imgUrl: "src/assets/ewaste.png"
        },
        {
            projectName: "Chat App",
            imgUrl: "src/assets/chat.png"
        },
        {
            projectName: "Live New App",
            imgUrl: "src/assets/news.png"
        },
        {
            projectName: "Express js",
            imgUrl: "src/assets/express.png"
        },
        {
            projectName: "Mongo Db",
            imgUrl: "src/assets/mongo.png"
        },
    ]

    return (

        <div className="h-screen bg-[#0e1525] overflow-y-scroll max-w-full overflow-x-hidden relative">
            <span className=" text-gray-400 absolute flex gap-10 overflow-x-hidden left-[22%] max-w- top-[11%] sm:left-[42%] sm:top-[17%] text-1xl z-10">
                <h3>Projects</h3>
                <h3>Ongoing Projects</h3>
            </span>
            <div className="grid sm:grid-cols-5 pt-44 place-items-center gap-y-5">
                {
                    projectData.map((project, index) => (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 100
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 1
                            }}
                            transition={{
                                duration: 1,
                                delay: index * 0.2
                            }}
                            className="">

                            <div className="h-[200px] text-white hover:cursor-pointer hover:scale-125 z-20 transition-all  w-[200px] flex whitespace-nowrap flex-col bg-[rgba(0,0,0,0.2)] px-[30px] items-center justify-center">
                                <img src={project.imgUrl} alt="react" className="" />
                                <p className={`${project.projectName == "Hulu Clone" && "mt-9" }`}>{project.projectName}</p>
                            </div>
                        </motion.div>
                    ))
                }

            </div>

        </div>
    )
}

export default Projects