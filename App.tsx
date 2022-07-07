import { NavigationContainer } from "@react-navigation/native";
import { ContextProvider } from "./src/contexts/context";
import MainStack from "./src/stacks/mainStack";

const App = () => {
    return (
        <ContextProvider>
            <NavigationContainer>
                <MainStack/>
            </NavigationContainer>
        </ContextProvider>
    );
}

export default App;