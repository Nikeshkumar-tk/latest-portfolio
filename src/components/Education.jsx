import { motion } from "framer-motion"
const Education = () => {
    return (
        <div className='h-screen px-10 bg-[#0e1525] flex justify-center items-center text-white'>
            <div className='h-50 w-50 flex flex-col gap-10'>
                <header>
                    <motion.h3
                        initial={{
                            opacity: 0,
                            x: -100
                        }}
                        transition={{
                            duration: 2
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        className='tracking-[12px] text-2xl text-gray-300'
                    >Education
                    </motion.h3>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 2,
                            delay: 0.5
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        className='h-1 bg-gray-400 w-52 rounded mt-2'></motion.div>
                </header>
                <motion.article
                    initial={{
                        opacity: 0,

                    }}
                    whileInView={{
                        opacity: 1,

                    }}
                    transition={{
                        duration: 2,
                        delay: 0.7
                    }}
                    className='leading-9 font-[lato] tracking-[2px]'>
                    Secondary Education - Pratheeksha Bhavan English Medium School (CBSE).
                    <br />
                    Higher Secondary Education - SN Trust,Cherthala,Kerala(Government of Kerala).
                    <br />
                    Undergraduation(UG) - University of Kerala,
                    Stream - Bsc Computer Science (Currently pursuing).

                </motion.article>
            </div>
        </div>
    )
}

export default Education