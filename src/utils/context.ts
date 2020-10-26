import React from 'react'
const ThemeContext = React.createContext({
	collapsedStatus: false
})

export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer