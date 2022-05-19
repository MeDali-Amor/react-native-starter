import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const SwitchButton = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: "#EAEBF0", true: "#1A1A1A" }}
                thumbColor={isEnabled ? "#f4f3f4" : "#fff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default SwitchButton;
