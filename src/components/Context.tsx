import React, {useContext, createContext, ReactNode, useState } from 'react'

interface ContextProps {
    children: ReactNode
}

interface Props{
    text:string
    setText:React.Dispatch<React.SetStateAction<string>>
}


const AppData = createContext({} as Props)

const Context:React.FC<ContextProps> = ({children}) => {
    const [text, setText] = useState<string>('')
  return (
    <AppData.Provider value={{text, setText}}>
        {children}
    </AppData.Provider>
  )
}

export default Context

export const AppContext = () => {
    return useContext(AppData)
}
