import { ThemeProvider } from "styled-components/native";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import themes from "../themes";

export enum ThemeType {
    light = "light",
    dark = "dark"
}

const ThemesObject = {
    dark: themes.dark,
    light: themes.light
}

export const ThemeContext = createContext({
    theme: ThemeType.light,
    toogleTheme: () => {},
});

export const ContextProvider: React.FC = ({ children }) => {

    const [ theme, setTheme ] = useState(ThemeType.light);

    const loadTheme = async () => {
        const savedTheme = await AsyncStorage.getItem("@theme");
        if(savedTheme !== null) {
            setTheme(savedTheme as ThemeType);
        }
    }

    useEffect(() => {
        loadTheme();
    }, []);

    const toogleTheme = async () => {
        let selectedTheme;
        if(theme === ThemeType.light) {
            selectedTheme = ThemeType.dark;
        } else {
            selectedTheme = ThemeType.light;
        }
        setTheme(selectedTheme);
        await AsyncStorage.setItem("@theme", selectedTheme);
    }

    return(
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
            <ThemeProvider theme={ThemesObject[theme]}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}