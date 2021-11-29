import React from 'react'
import { StyleSheet, Image} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import {GLOBAL_COLORS} from "../const";


type Props = {

};

const Header = ({}: Props) => {
    return(

            <LinearGradient
                angle={45}
                angleCenter={{x: 0.6, y: 0.5}}
                colors={[GLOBAL_COLORS.secondary, GLOBAL_COLORS.extra]}
                style={styles.topContainer}
                useAngle
            >
                <Image
                    source={require('../../../assets/images/elPassion-logo.png')}
                    style={styles.image}
                />
            </LinearGradient>
    )
}

const styles = StyleSheet.create({
    topContainer:{
        bottom:"20%",
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'stretch',
        top:"8%",
        shadowOffset: {
            height: 1.5,
            width: 1.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    }
})

export default Header;