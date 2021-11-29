import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {GLOBAL_COLORS} from "../../ui/const";

const WelcomeScreen = () => {
    const navigation = useNavigation();

    useEffect(() =>{
        setTimeout(() =>{
            navigation.navigate('Search')
        }, 5000)
    },[])

    return (
        <SafeAreaView style={styles.mainContainer}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/logo-dark.webp')}
                />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: GLOBAL_COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: 200,
        height: 200,
        resizeMode: 'stretch',
        shadowOffset: {
            height: 3,
            width: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
})
export default WelcomeScreen;
