import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CustomTabBar from "../components/customTabBar";

import Home from "../screens/Home";

export type TabStackList = {
    Home: undefined;
    Search: undefined;
    Maps: {
        latitude?: number;
        longitude?: number;
    }
    Favorites: undefined;
    Profile: undefined;
    Parks: undefined;
    SinglePark: {
        id: number;
    };
    Attractive: {
        id: number;
    };
    PopularLocations: undefined;
    Tours: undefined;
};

export type MainTabProps = NativeStackNavigationProp<TabStackList>
const { Navigator, Screen } = createBottomTabNavigator<TabStackList>();

const MainTab = () => (
    <Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
            headerShown: false
        }}
    >
        <Screen name="Home" component={Home}/>
    </Navigator>
);

export default MainTab;