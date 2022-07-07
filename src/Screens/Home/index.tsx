import { useContext } from "react";
import { ThemeContext } from "../../contexts/context";
import * as C from "./styles";

const Home = () => {

    const { theme, toogleTheme } = useContext(ThemeContext);

    return(
        <C.Container>
            <C.Text>Tema</C.Text>
        </C.Container>
    );
}

export default Home;