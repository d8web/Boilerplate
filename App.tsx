import { NavigationContainer } from "@react-navigation/native";
import { ContextProvider } from "./src/contexts/context";
import { ThemeProvider } from "styled-components";
import ThemeFunctions from "./src/helpers/themeFunctions";
import MainStack from "./src/stacks/mainStack";

const App = () => {
    return (
        <ThemeProvider theme={ThemeFunctions.getMyTheme()}>
            <ContextProvider>
                <NavigationContainer>
                    <MainStack/>
                </NavigationContainer>
            </ContextProvider>
        </ThemeProvider>
    );
}

export default App;