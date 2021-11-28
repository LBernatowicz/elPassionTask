import React from 'react'
import {TouchableOpacity, View, Text, StyleProp, ViewStyle, StyleSheet, Image} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import UserScreen from "../screens/UserScreen";
import {GLOBAL_COLORS} from "../../ui/const";
import {useNavigation} from "@react-navigation/native";

type Props = {
    title: string
};

const Header = ({title}: Props) => {
    const navigation = useNavigation();
    //console.log(title);
    return(
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate('User', title);
        }}
        >
            <LinearGradient
                angle={45}
                angleCenter={{x: 1, y: 0.1}}
                colors={[GLOBAL_COLORS.secondary, GLOBAL_COLORS.extra]}
                style={styles.topContainer}
                useAngle
            >
                <Text>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    topContainer:{
        borderRadius: 10,
        width: 350,
        height: 100,
        backgroundColor: GLOBAL_COLORS.secondary,
        elevation: 5,
        shadowOffset: {
            height: 3,
            width: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        marginTop: '5%',
    },
})

export default Header;