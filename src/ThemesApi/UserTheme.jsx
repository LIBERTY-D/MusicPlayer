import React, { createContext, useState } from 'react'


export const themeContext =  createContext()
export  function UserTheme({children}) {
    const [theme,setTheme] = useState("")
  return (
        <themeContext.Provider value={{theme,setTheme}}>
            {children}
        </themeContext.Provider>
  )
}

