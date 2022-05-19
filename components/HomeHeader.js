import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";
import { COLORS, SIZES, assets } from "../constants";
import { SwitchButton } from "../shared";

const HomeHeader = () => {
    const { height, width } = useWindowDimensions();
    return (
        <View style={styles.container}>
            <View>
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
            <View>
                <SwitchButton />
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
