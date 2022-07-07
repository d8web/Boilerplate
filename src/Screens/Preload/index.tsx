import { useContext } from "react";
import { Switch } from "react-native";
import { ThemeContext, ThemeType } from "../../contexts/context";
import * as C from "./styles";

const Preload = () => {

    const { theme, toogleTheme } = useContext(ThemeContext);

    const isDark = theme === ThemeType.dark ? true : false;

    return (
        <C.Container>
            <Switch value={isDark} onValueChange={toogleTheme} />
            <C.Text>Preload</C.Text>
        </C.Container>
    );
}

export default Preload;