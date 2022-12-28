import { createContext, useState } from "react"

export const NavContext = createContext({showNav:false,setShowNav:() => {}})


export const NavContextProvider = ({children}) => {
const [showNav, setShowNav] = useState(false)
    return(
<NavContext.Provider value={{showNav:showNav, setShowNav:setShowNav}}>
{children}
</NavContext.Provider>

    )
}