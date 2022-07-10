import { useContext } from "react";
import { Context } from "../../contexts/context";
import { Switch } from "react-native";
import * as C from "./styles";

const Preload = () => {

    const { state, dispatch } = useContext(Context);

    const handleSwitchTheme = () => {
        if (state.theme.status === "light") {
            dispatch({
                type: "CHANGE_STATUS",
                payload: {
                    status: "dark"
                }
            })
        } else {
            dispatch({
                type: "CHANGE_STATUS",
                payload: {
                    status: "light"
                }
            })
        }
    }

    const isDark = state.theme.status === "dark" ? true : false;

    return (
        <C.Container>
            <Switch value={isDark} onValueChange={handleSwitchTheme} />
            <C.Text>Preload</C.Text>
        </C.Container>
    );
}

export default Preload;