import { useContext, useEffect, useState } from "react"
import { NavContext } from "../context/NavContextProvider"
import { motion } from "framer-motion"

const Navbar = () => {
  const [selected, setSelected] = useState({})
  const { showNav } = useContext(NavContext)


  return (
    <div className={`z-10 w-screen p-5  mx-auto fixed text-[#ffffff] ${showNav && ("bg-[#0e1525] shadow-md")}`}>
      <div className="flex w-full justify-center px-5">
        <ul className="justify-center gap-10 uppercase p-5 hidden sm:flex relative">
          <div
            className={`absolute w-[${selected.length}] translate-x-[${selected.pos}] rounded-md bg-gray-400 transition-all h-[1.6px] left-5 bottom-3 z-30`}></div>
          <li className="tracking-widest cursor-pointer" onClick={() => setSelected({pos:"0px",length:"100px"})}>Education</li>
          <li className="tracking-widest cursor-pointer" onClick={() => setSelected({pos:"150px",length:"98px"})}>Projects</li>
          <li className="tracking-widest cursor-pointer">Skills</li>
          <li className="tracking-widest cursor-pointer">Experience</li>
          <li className="tracking-widest cursor-pointer">socials</li>
          <li className="tracking-widest cursor-pointer">contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar