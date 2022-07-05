import { useColorScheme } from "react-native";
import Themes from "../themes";

export default {
    getMyTheme: () => {
        const colorScheme = useColorScheme(); // dark, light, null
        if (colorScheme !== null && colorScheme !== undefined) {
            return Themes[colorScheme];
        } else {
            return Themes.light;
        }
    }
}