import { View, Text, TouchableOpacity, Image } from "react-native";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";

export const SquarePlusButton = () => {
    return (
        <TouchableOpacity
            style={{
                width: 25,
                height: 25,
                backgroundColor: COLORS.white,
                // position: "absolute",
                borderRadius: 6,
                color: "#374957",
                borderColor: "#374957",
                borderWidth: 2,
                alignItems: "center",
                justifyContent: "center",

                ...SHADOWS.light,
                // ...props,
            }}
            // onPress={handlePress}
        >
            <Image
                source={assets.plus}
                resizeMode="contain"
                style={{ width: "70%", height: "70%" }}
            />
            {/* <Text
                style={{
                    textAlign: "center",
                    fontFamily: "Robot_Black",
                    fontWeight: 900,
                    fontSize: 24,
                }}
            >
                +
            </Text> */}
        </TouchableOpacity>
    );
};

export const MenuButton = () => {
    return (
        <TouchableOpacity
            style={{
                width: 35,
                height: 35,
                backgroundColor: COLORS.white,
                // position: "absolute",
                // borderRadius: 6,
                // color: "#374957",
                // borderColor: "#374957",
                // borderWidth: 2,
                alignItems: "center",
                justifyContent: "center",

                // ...SHADOWS.light,
                // ...props,
            }}
            // onPress={handlePress}
        >
            <Image
                source={assets.hamburger}
                resizeMode="contain"
                style={{ width: 34 }}
            />
            {/* <Text
                style={{
                    textAlign: "center",
                    fontFamily: "Robot_Black",
                    fontWeight: 900,
                    fontSize: 24,
                }}
            >
                +
            </Text> */}
        </TouchableOpacity>
    );
};
