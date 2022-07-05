import { createContext, useReducer } from "react";
import { UserType, userInitialState, userReducer } from "../reducers/userReducer";
import { ThemeType, themeInitialState, themeReducer } from "../reducers/themeReducer";
import { reducerActionType } from "../types/reducerActionType";

type initialStateType = {
    user: UserType,
    theme: ThemeType
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

const MainReducer = (state: initialStateType , action: reducerActionType) => ({
    user: userReducer(state.user, action),
    theme: themeReducer(state.theme, action)
})

type Props = {
    children: JSX.Element
}

export const ContextProvider = ({ children }: Props) => {
    const [ state, dispatch ] = useReducer(MainReducer, initialState)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}