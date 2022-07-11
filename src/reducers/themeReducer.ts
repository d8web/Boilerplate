import { reducerActionType } from "../types/reducerActionType";
import themes from "../themes";

export enum ThemeTypeObj {
    light = "light",
    dark = "dark"
}

export const ThemesObject = {
    dark: themes.dark,
    light: themes.light
}

export type ThemeType = {
    status: "dark" | "light"
}

export const themeInitialState: ThemeType = {
    status: "light",
}

export const themeReducer = (state: ThemeType, action: reducerActionType) => {
    switch(action.type) {
        case "CHANGE_STATUS":
            return { ...state, status: action.payload.status }
        break;
    }

    return state;
}