import { ThemeProvider } from "styled-components";
import ThemeFunctions from "./src/Helpers/ThemeFunctions";
import Home from "./src/Screens/Home";

const App = () => {

    return (
        <ThemeProvider theme={ThemeFunctions.getMyTheme()}>
            <Home />
        </ThemeProvider>
    );
}

export default App;