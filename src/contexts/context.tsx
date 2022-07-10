import { ThemeType, themeInitialState, themeReducer, ThemeTypeObj } from "../reducers/themeReducer";
import { createContext, useEffect, useReducer, useState } from "react";
import { UserType, userInitialState, userReducer } from "../reducers/userReducer";
import { reducerActionType } from "../types/reducerActionType";
import { ThemeProvider } from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import themes from "../themes";
import { useColorScheme } from "react-native";

type initialStateType = {
    user: UserType,
    theme: ThemeType
}

const ThemesObject = {
    dark: themes.dark,
    light: themes.light
}

type ContextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>
}

const initialState: initialStateType = {
    user: userInitialState,
    theme: themeInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const MainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action),
    theme: themeReducer(state.theme, action)
})

export const ContextProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(MainReducer, initialState);
    const [theme, setTheme] = useState(ThemeTypeObj.light);
    const [first, setFirst] = useState(false);

    const deviceTheme = useColorScheme();

    const toogleDevice = async () => {
        if(deviceTheme !== null && deviceTheme !== undefined) {
            if(deviceTheme === "dark") {
                setTheme(ThemeTypeObj.dark);
            } else {
                setTheme(ThemeTypeObj.light);
            }
        }
    }

    const loadTheme = async () => {
        const savedTheme = await AsyncStorage.getItem("@theme");
        if (savedTheme !== null) {
            setTheme(savedTheme as ThemeTypeObj);
            dispatch({
                type: "CHANGE_STATUS",
                payload: {
                    status: savedTheme
                }
            });
        }

        setFirst(true);
    }

    const toogleTheme = async () => {
        let selectedTheme;
        if(theme === ThemeTypeObj.light) {
            selectedTheme = ThemeTypeObj.dark;
        } else {
            selectedTheme = ThemeTypeObj.light;
        }
        setTheme(selectedTheme);
        await AsyncStorage.setItem("@theme", selectedTheme);
    }

    useEffect(() => {
        if(first) {
            toogleTheme();
        }
    }, [state.theme.status]);

    useEffect(() => {
        if(first) {
            toogleDevice();
        }
    }, [deviceTheme]);

    useEffect(() => {
        loadTheme();
    }, []);

    return (
        <Context.Provider value={{ state, dispatch }}>
            <ThemeProvider theme={ThemesObject[theme]}>
                {children}
            </ThemeProvider>
        </Context.Provider>
    )
}