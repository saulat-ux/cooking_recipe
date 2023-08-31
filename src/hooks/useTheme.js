import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../components/navbar/context/ThemeContext'


export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(context === undefined){
        throw new Error ('useTheme() must be usde inside a ThemeProvider')
    }
  return context
}


