import { ImageBackground, Switch, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useContext } from "react";
import { BlurView } from "expo-blur";
import { Context } from "../../contexts/context";
import * as C from "./styles";
import BottomSheetComponent from "../../components/BottomSheet";

const Preload = () => {

    const { state, dispatch } = useContext(Context);

    const handleSwitchTheme = () => {
        if (state.theme.status === "light") {
            dispatch({
                type: "CHANGE_STATUS",
                payload: {
                    status: "dark"
                }
            })
        } else {
            dispatch({
                type: "CHANGE_STATUS",
                payload: {
                    status: "light"
                }
            })
        }
    }

    const isDark = state.theme.status === "dark" ? true : false;

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <C.Container>
                <C.Area>
                    <Switch value={isDark} onValueChange={handleSwitchTheme} />
                    <C.Text>Preload</C.Text>
                    <ImageBackground
                        source={require("../../assets/serrinha.jpg")}
                        style={{ width: 300, height: 400, justifyContent: "flex-end", alignItems: "flex-end" }}
                    >
                        <BlurView
                            intensity={125}
                            style={{ width: "100%", height: 100, justifyContent: "center", alignItems: "center" }}
                        >
                            <View style={{ width: "100%", height: 100, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 20, fontWeight: "600", color: "#fff" }}>Blur</Text>
                            </View>
                        </BlurView>
                    </ImageBackground>
                    <BottomSheetComponent/>
                </C.Area>
            </C.Container>
        </GestureHandlerRootView>
    );
}

export default Preload;