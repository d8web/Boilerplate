import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import Home from "./src/Screens/Home";
import Themes from "./src/Themes";

const App = () => {

    // dark, light, null
    const colorScheme = useColorScheme();
    const myTheme = colorScheme !== null && colorScheme !== undefined ? Themes[colorScheme] : Themes.dark;

    return(
        <ThemeProvider theme={myTheme}>
            <Home/>
        </ThemeProvider>
    );
}

export default App;