import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

const ArticleCard = ({ data, uri, width }) => {
    // const { height, width } = useWindowDimensions();

    const [imgURL, setImgURL] = useState("");
    useEffect(() => {
        const asynFunc = async () => {
            await setImgURL(
                `${uri}` +
                    data.image.substring(
                        data.image.indexOf("=") + 2,
                        data.image.indexOf(" width") - 1
                    )
            );
        };
        asynFunc();
    }, [data]);
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.white,
                borderRadius: width / 10,
                marginBottom: SIZES.extraLarge,
                margin: width / 32,
                ...SHADOWS.dark,
                width: width * 0.84,
                height: width * 1.06,
                position: "relative",
            }}
            onPress={() => navigation.navigate("Article", { data, imgURL })}
        >
            <View style={{ width: "100%", height: "100%" }}>
                <Image
                    source={{
                        uri:
                            imgURL.length > 0
                                ? imgURL
                                : `${uri}/drupalwebsite/sites/default/files/oatmeal-fruit-syrup-topping.jpg`,
                    }}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        borderRadius: width / 10,
                        height: "100%",
                    }}
                />
                <View
                    style={[
                        StyleSheet.absoluteFillObject,
                        {
                            backgroundColor: "rgba(0,0,0,0.3)",
                            borderRadius: width / 10,
                        },
                    ]}
                ></View>
            </View>
            {/* <View
                style={{
                    borderRadius: 36,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    // opacity: 0.8,
                }}
            ></View> */}

            <View
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: "35%",
                    left: 0,
                    paddingHorizontal: width / 12,
                    paddingBottom: width / 15,
                }}
            >
                <Text
                    style={{
                        fontFamily: "Roboto-Bold",
                        fontWeight: "bold",
                        fontSize: width / 10,
                        color: COLORS.white,
                    }}
                >
                    {data.name}
                </Text>
            </View>
            <View
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: "15%",
                    left: 0,
                    paddingHorizontal: width / 12,
                    paddingBottom: width / 15,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Image
                    source={assets.logo}
                    resizeMode="contain"
                    style={{ height: width / 10 }}
                />
                <Text
                    style={{
                        // fontFamily: FONTS.bold,
                        // fontWeight: "",
                        fontSize: width / 30,
                        color: COLORS.white,
                    }}
                >
                    4h ago
                </Text>
            </View>
            <View
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: "0%",
                    left: 0,
                    paddingHorizontal: 0,
                    paddingBottom: width / 15,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}
            >
                <Text
                    style={{
                        // fontFamily: FONTS.bold,
                        // fontWeight: "",
                        fontSize: width / 30,
                        color: COLORS.white,
                    }}
                >
                    {data.creator}
                </Text>
                <Text
                    style={{
                        // fontFamily: FONTS.bold,
                        // fontWeight: "",
                        fontSize: width / 30,
                        color: COLORS.white,
                    }}
                >
                    5min Reads
                </Text>
                <Text
                    style={{
                        // fontFamily: FONTS.bold,
                        // fontWeight: "",
                        fontSize: width / 30,
                        color: COLORS.white,
                    }}
                >
                    50 Upvote
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ArticleCard;
