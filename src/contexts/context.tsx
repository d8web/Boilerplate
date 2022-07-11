import * as ThemeReducer from "../reducers/themeReducer";
import { createContext, useEffect, useReducer, useState } from "react";
import { UserType, userInitialState, userReducer } from "../reducers/userReducer";
import { reducerActionType } from "../types/reducerActionType";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";

type initialStateType = {
    user: UserType,
    theme: ThemeReducer.ThemeType
}

type ContextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>
}

const initialState: initialStateType = {
    user: userInitialState,
    theme: ThemeReducer.themeInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const MainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action),
    theme: ThemeReducer.themeReducer(state.theme, action)
})

export const ContextProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(MainReducer, initialState);
    const [theme, setTheme] = useState(ThemeReducer.ThemeTypeObj.light);
    const [first, setFirst] = useState(false);

    const deviceTheme = useColorScheme();

    const toogleDevice = async () => {
        if(deviceTheme !== null && deviceTheme !== undefined) {
            if(deviceTheme === "dark") {
                setTheme(ThemeReducer.ThemeTypeObj.dark);
            } else {
                setTheme(ThemeReducer.ThemeTypeObj.light);
            }
        }
    }

    const loadTheme = async () => {
        const savedTheme = await AsyncStorage.getItem("@theme");

        if(savedTheme !== null) {
            setTheme(savedTheme as ThemeReducer.ThemeTypeObj);
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
        let selectedTheme = ThemeReducer.ThemeTypeObj.light;
        
        if(theme === ThemeReducer.ThemeTypeObj.light) {
            selectedTheme = ThemeReducer.ThemeTypeObj.dark;
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
            <ThemeProvider theme={ThemeReducer.ThemesObject[theme]}>
                {children}
            </ThemeProvider>
        </Context.Provider>
    );
}