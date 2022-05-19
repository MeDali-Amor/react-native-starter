import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import React from "react";

const FocusedStatusBar = (props) => {
    const isFofused = useIsFocused();
    return isFofused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
