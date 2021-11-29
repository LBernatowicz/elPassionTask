import React from 'react'
import {TouchableOpacity, Text, StyleSheet, View} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {GLOBAL_COLORS, GLOBAL_FONTS, GLOBAL_FONTSIZES} from "../../ui/const";
import {useNavigation} from "@react-navigation/native";

type Props = {
    title: string
};

const Header = ({title}: Props) => {
    const navigation = useNavigation();
    //console.log(title)
    return(
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate('User', {title: title});
        }}
        >
            <LinearGradient
                angle={45}
                angleCenter={{x: 1, y: 0.1}}
                colors={[GLOBAL_COLORS.secondary, GLOBAL_COLORS.extra]}
                style={styles.topContainer}
                useAngle
            >
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{title.toUpperCase()}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    topContainer:{
        padding: 5,
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
    headerContainer:{
        width: '100%',
    },
    headerText:{
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
    }
})

export default Header;