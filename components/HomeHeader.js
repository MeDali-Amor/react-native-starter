import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";
import { COLORS, SIZES, assets } from "../constants";
import { MenuButton, SquarePlusButton, SwitchButton } from "../shared";

const HomeHeader = () => {
    const { height, width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <View style={{ width: width / 2 }}>
                <Image
                    source={assets.logo}
                    resizeMode="contain"
                    style={{
                        // width: 20,
                        // height: 20,
                        marginRight: SIZES.base,
                    }}
                />
            </View>
            <View
                style={{
                    width: width / 3,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <SquarePlusButton />
                <SwitchButton />
                <MenuButton />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        // width: "100%",
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
export default HomeHeader;
