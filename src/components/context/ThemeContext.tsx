import {  createContext } from "react"
import { theme } from "./theme"

type ThemeContextProviderProps = {
  children: React.ReactNode
}

type ThemeProps = {
  primary : {
    main: string
    text: string
  },
  secondary:{
    main: string
    text: string
  }
}
//export const ThemeContext = createContext({} as ThemeProps);
export const ThemeContext = createContext(theme);

export const ThemeContextProvider = (props : ThemeContextProviderProps) => {

  return <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>
}