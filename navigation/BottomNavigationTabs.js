import * as React from "react";
import { Text, View, Image, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants";

import tabNavigationData from "./navigationData";

const Tab = createBottomTabNavigator();

export default function BottomNavigationTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                showLabel: false,
                style: { height: Platform.OS === "ios" ? 90 : 50 },
                tabBarStyle: [
                    {
                        display: "flex",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        // shadowOpacity: 0.58,
                        // shadowRadius: 16.0,
                        // elevation: 48,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        backgroundColor: "#fff",
                        padding: 8,
                        width: "100%",
                        height: 60,
                        zIndex: 0,
                    },
                    null,
                ],
            }}
        >
            {tabNavigationData.map((item, idx) => (
                <Tab.Screen
                    key={`tab_item${idx + 1}`}
                    name={item.name}
                    component={item.component}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.tabBarItemContainer}>
                                <Image
                                    resizeMode="contain"
                                    source={item.icon}
                                    style={[
                                        styles.tabBarIcon,
                                        focused && styles.tabBarIconFocused,
                                    ]}
                                />
                            </View>
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: "700",
                                    color: focused ? "#494BA1" : "#B1B2B2",
                                }}
                            >
                                {item.name}
                            </Text>
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarItemContainer: {
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 2,
        borderBottomColor: COLORS.white,
        paddingHorizontal: 10,
        bottom: Platform.OS === "ios" ? -5 : 0,
    },
    tabBarIcon: {
        width: 23,
        height: 23,
    },
    tabBarIconFocused: {
        tintColor: "#494BA1",
    },
});
