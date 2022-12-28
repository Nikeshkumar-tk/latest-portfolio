import { motion } from "framer-motion"


const Skills = () => {

    const skillData = [
        {
            SkillName: "React JS",
            imgUrl: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        },
        {
            SkillName: "Node JS",
            imgUrl: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png"
        },
        {
            SkillName: "Next JS",
            imgUrl: "https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
        },
        {
            SkillName: "Tailwind CSS",
            imgUrl: "https://hight.io/_nuxt/img/tailwind.3558838.png"
        },
        {
            SkillName: "gitHub",
            imgUrl: "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_gray-512.png"
        },
        {
            SkillName: "Javascript",
            imgUrl: "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
        },
        {
            SkillName: "Express js",
            imgUrl: "src/assets/express.png"
        },
        {
            SkillName: "Mongo Db",
            imgUrl: "src/assets/mongo.png"
        },
    ]

    return (

        <div className="h-screen bg-[#0e1525] overflow-y-scroll relative">
            <div className=" text-gray-400 absolute left-[43%] top-[11%] sm:left-[48%] sm:top-[17%] text-2xl z-10">
                <h3>Skills</h3>
            </div>
            <div className="grid sm:grid-cols-5 pt-44 place-items-center gap-y-5">
                {
                    skillData.map((skill, index) => (
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
                                <img src={skill.imgUrl} alt="react" className="" />
                                <p>{skill.SkillName}</p>
                            </div>
                        </motion.div>
                    ))
                }

            </div>

        </div>
    )
}

export default Skills