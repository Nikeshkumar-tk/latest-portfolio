import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <div className="h-screen px-10 bg-[#0e1525] flex justify-center items-center text-white">
      <div className="h-50 w-50 flex flex-col gap-10">
        <header>
          <motion.h3
            initial={{
              opacity: 0,
              x: -100,
            }}
            transition={{
              duration: 2,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="tracking-[12px] text-2xl text-gray-300"
          >
            About me
          </motion.h3>
          <motion.div
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 2,
              delay: 0.5,
            }}
            whileInView={{
              opacity: 1,
            }}
            className="h-1 bg-gray-400 w-52 rounded mt-2"
          ></motion.div>
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
            delay: 0.7,
          }}
          className="leading-9 font-[lato] tracking-[2px]"
        >
          <p>
            Hi, i am a full stack developer with deep passion in web development .{" "}
                 <br />
            Looking forward for opperchunities to learn new technologies and to work with great developers.
            <br />  I am currently doing an internship
            in full stack development

          </p>
        </motion.article>
      </div>
    </div>
  );
};

export default AboutMe;
