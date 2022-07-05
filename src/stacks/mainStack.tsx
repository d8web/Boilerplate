import {
    createNativeStackNavigator,
    NativeStackNavigationProp
} from "@react-navigation/native-stack";

import Preload from "../screens/Preload";
import MainTab from "./mainTab";

export type RootStackParamList = {
    Preload: undefined;
    SignIn: undefined;
    SignUp: undefined;
    MainTab: undefined;
};

export type MainStackProps = NativeStackNavigationProp<RootStackParamList>
const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
    return (
        <Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Preload" component={Preload} />
            {/* <Screen name="SignIn" component={SignIn} />
            <Screen name="SignUp" component={SignUp} /> */}
            <Screen name="MainTab" component={MainTab} />
        </Navigator>
    );
}

export default MainStack;