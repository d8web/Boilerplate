import { TouchableOpacity, View } from "react-native";
import Styles from "./styles";

type Props = {
    state: {
        index: number;
    };
    navigation: {
        navigate: (name: string) => void;
    };
}

const CustomTabBar = ({ state, navigation }: Props) => {

    const handleGo = (screenName: string) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={Styles.TabArea}>

            <TouchableOpacity
                style={Styles.TabItem}
                onPress={() => handleGo("Home")}
            >
                
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.TabItem}
                onPress={() => handleGo("Search")}
            >
                
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.TabItem}
                onPress={() => handleGo("Maps")}
            >
                
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.TabItem}
                onPress={() => handleGo("Favorites")}
            >
                
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.TabItem}
                onPress={() => handleGo("Profile")}
            >
                
            </TouchableOpacity>
            
        </View>
    );
}

export default CustomTabBar;