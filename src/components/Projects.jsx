import { motion } from "framer-motion"

const Projects = () => {
    const projectData = [
        {
            projectName: "Hulu Clone",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/miniprojectprofile.appspot.com/o/huluv1.png?alt=media&token=a4790311-3281-47ab-ad7f-4432fd9a5ea1",
        },
        {
            projectName: "Netflix Clone",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/miniprojectprofile.appspot.com/o/netflix.png?alt=media&token=858c0205-7856-40ee-a033-bf34f70c3547"
        },
        {
            projectName: "Full Stack Blog App",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/miniprojectprofile.appspot.com/o/blog.png?alt=media&token=4a69c3ab-eab2-438e-9fd5-0b3baa8e3529"
        },
        {
            projectName: "E-waste management System",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/miniprojectprofile.appspot.com/o/chat.png?alt=media&token=22cc82d2-d7fe-4b4f-b934-38a645b196e0"
        },
        {
            projectName: "Chat App",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/miniprojectprofile.appspot.com/o/chat.png?alt=media&token=22cc82d2-d7fe-4b4f-b934-38a645b196e0"
        },
        {
            projectName: "Live New App",
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/miniprojectprofile.appspot.com/o/news.png?alt=media&token=992e17ea-4e4b-4611-8450-192b153fc045"
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