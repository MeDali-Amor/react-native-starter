import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigationTabs from "./BottomNavigationTabs";
import { Article } from "../screens";
const StackNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            // initialRouteName="Home"
        >
            {/* <Stack.Screen name="Home" component={Home} /> */}
            <Stack.Screen name="Main" component={BottomNavigationTabs} />
            <Stack.Screen name="Article" component={Article} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
