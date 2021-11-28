import React from 'react'
import {TouchableOpacity, Text, StyleProp, ViewStyle, StyleSheet} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import {GLOBAL_COLORS,GLOBAL_FONTSIZES} from "../const";
import { IconProp } from '@fortawesome/fontawesome-svg-core';


type Props = {
    title: string,
    onPress(): void,
    style?: StyleProp<ViewStyle>,
    enabled?: boolean,
    color?: string,
    iconName?: IconProp,
    iconSize?: 18 | 20 | 22 | 26 | 30 | 34 | 38 | 42 | 46 | 50;
};

const Button = ({title, onPress, enabled, style, color}: Props) => {
    return(
        <TouchableOpacity
            onPress={onPress}
            disabled={enabled === true}
            style={[styles.button, style, {backgroundColor: color ? color : GLOBAL_COLORS.secondary}]}
        >
                <LinearGradient
                    angle={45}
                    angleCenter={{x: 0.6, y: 0.5}}
                    colors={[GLOBAL_COLORS.secondary, GLOBAL_COLORS.extra]}
                    style={styles.gradient}
                    useAngle
                >
                    <Text style={styles.text}>{title}</Text>
                </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 1,
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: GLOBAL_COLORS.text,
        fontSize: GLOBAL_FONTSIZES.header,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        textAlign: 'center',
    },
    gradient: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.secondary,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    greyButton: {
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.extra,
        borderRadius: 56,
        height: 56,
        justifyContent: 'center',
        width: '100%',
    },
})

export default Button;