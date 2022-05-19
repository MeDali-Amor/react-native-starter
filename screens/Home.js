import { useState, useEffect, useRef } from "react";
import {
    Text,
    View,
    FlatList,
    SafeAreaView,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Animated,
} from "react-native";
import { COLORS, Authors, assets, ArticlesData } from "../constants";
import { useWindowDimensions } from "react-native";
import axios from "axios";
import { FocusedStatusBar, ArticleCard } from "../shared";
import { HomeHeader } from "../components";
const Home = () => {
    const { height, width } = useWindowDimensions();
    const [dataList, setDataList] = useState([]);
    const [categories, setCategories] = useState([
        { id: "1", title: "Trending" },
        { id: "2", title: "My topics" },
        { id: "3", title: "Local news" },
        { id: "4", title: "Fact check" },
        { id: "5", title: "Discover" },
    ]);
    const [status, setStatus] = useState(categories[0]);
    const uri = "https://8a78-197-2-77-70.eu.ngrok.io";
    // const handleSearch = (value) => {
    //     let currentList = [...dataList];
    //     if (!value.length) return setDataList(currentList);
    //     const filteredData = currentList.filter((item) =>
    //         item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    //     );
    //     if (filteredData.length) {
    //         setDataList(filteredData);
    //     } else {
    //         setDataList(currentList);
    //     }
    // };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `${uri}/drupalwebsite/api/articles`
                );
                setDataList(res.data);
                let cat = [
                    ...new Set(
                        res.data
                            .map((arr) => arr.categories.split(","))
                            .flat()
                            .map((el) => el.trim())
                    ),
                ].map((el) => ({ title: el }));
                console.log(cat);
                setCategories(cat);
                setStatus(cat[0]);
            } catch (error) {
                setDataList(ArticlesData);
            }
        };
        fetchData();
    }, []);
    const setStatusFilter = (status) => {
        Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
        });
        setStatus(status);
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.primary} />
            <HomeHeader />
            <AuthorsList />
            <View style={[styles.tabsContainer]}>
                <ScrollView
                    style={{ position: "relative" }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {categories.map((el) => (
                        <TouchableOpacity
                            onPress={() => setStatusFilter(el.title)}
                            key={el.title}
                            style={{ marginHorizontal: 10 }}
                        >
                            <Text
                                style={
                                    status === el.title
                                        ? styles.activeTab
                                        : styles.tabText
                                }
                            >
                                {el.title}
                            </Text>
                            {status === el.title ? <Indicator /> : null}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.cardsContainer}>
                {dataList.length > 0 && (
                    <View style={{ zIndex: 0 }}>
                        <FlatList
                            data={dataList}
                            renderItem={({ item }) => (
                                <ArticleCard data={item} uri={uri} />
                            )}
                            keyExtractor={(item) => item.name}
                            showsVerticalScrollIndicator={false}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            // ListHeaderComponent={

                            // }
                        />
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

export default Home;
const AuthorsList = () => {
    return (
        <View style={styles.Autherscontainer}>
            <FlatList
                horizontal={true}
                data={Authors}
                renderItem={({ item }) => <AuthorCirlceView data={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};
const Indicator = () => {
    return (
        <View
            style={{
                position: "absolute",
                height: 3,
                width: "70%",
                backgroundColor: "#494BA1",
                left: "15%",
                bottom: 0,
                // transform: [{ translateX:  }],
            }}
        ></View>
    );
};
const AuthorCirlceView = ({ data }) => {
    return (
        <View
            style={{
                marginHorizontal: 6,
            }}
        >
            <Image
                source={data.image}
                resizeMode="cover"
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    overflow: "hidden",
                    borderWidth: 2,
                    borderColor: "#494BA1",
                }}
            />
        </View>
    );
};

export const Tab = ({ data }) => {
    return (
        <View style={{ marginHorizontal: 5 }}>
            <Text style={styles.tabText}>{data.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cardsContainer: {
        flex: 1,
        margin: 8,
        backgroundColor: COLORS.white,
    },
    Autherscontainer: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    tabsContainer: {
        paddingVertical: 15,
    },
    tabStyle: {
        marginHorizontal: 10,
    },
    activeTab: {
        color: "#494BA1",
        fontFamily: "Roboto-Bold",
        fontSize: 16,
        lineHeight: 19,
        // fontWeight: "700",
        // borderBottomWidth: 3,
        paddingVertical: 10,
        // borderBottomColor: "#494BA1",
        // borderEndWidth: 2,
    },
    tabText: {
        color: COLORS.primary,
        paddingVertical: 8,
        fontFamily: "Roboto-Medium",
        lineHeight: 21,

        fontSize: 16,
    },
});
// const categories = ;
