import React from 'react'
import {TouchableOpacity, View, Text, StyleProp, ViewStyle, StyleSheet, Image} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import {GLOBAL_COLORS} from "../const";


type Props = {

};

const Header = ({}: Props) => {
    return(
        <View></View>
    )
}

const styles = StyleSheet.create({
    topContainer:{
        bottom:150,
        width: 300,
        height: 300,
        borderRadius: 150,
        backgroundColor: GLOBAL_COLORS.secondary,
        elevation: 5,
        transform: [{ scaleX:2}],
        shadowOffset: {
            height: 3,
            width: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
})

export default Header;