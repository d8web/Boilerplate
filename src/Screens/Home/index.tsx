import { useContext } from "react";
import { Context } from "../../contexts/context";
import * as C from "./styles";

const Home = () => {

    const { state, dispatch } = useContext(Context);

    const handleSwitchTheme = () => {
        if(state.theme.status === "light") {
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

    return(
        <C.Container>
            <C.Text>Tema ({state.theme.status})</C.Text>
            <C.Button onPress={handleSwitchTheme}>
                <C.Text>Trocar</C.Text>
            </C.Button>
        </C.Container>
    );
}

export default Home;