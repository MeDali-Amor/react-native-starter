import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import StackNavigator from "./navigation/StackNavigator";
export default function App() {
    const [loaded] = useFonts({
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        // "Roboto-SemiBold": require("./assets/fonts/"),
        "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
        "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    });
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: "#fff",
        },
    };

    if (!loaded) return null;
    return (
        <NavigationContainer theme={theme}>
            <StackNavigator />
        </NavigationContainer>
    );
}
