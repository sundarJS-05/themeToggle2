import  React, { createContext, useContext } from "react";

export const ThemeContext = React.createContext(
    {

        themeMode: "light",
        darkTheme: ()=>{},
        lightTheme: ()=>{}
    }
)

export const ThemeContextProvider = ThemeContext.Provider

function useTheme(params) {
    return useContext(ThemeContext)
}

export default useTheme