import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { GLOBAL_FONTSIZES,GLOBAL_COLORS} from "../../ui/const";

type Props = {
    labelValue?: string;
    title?: string;
    subTitle?: string;
    placeHolder?: string;
    bgColor?: string;
    onChangeText?(userName: string): void;
    onSubmitEditing?(userName: string): void;
    disable?: boolean;
};

const TextField = ({
                       labelValue,
                       title,
                       subTitle,
                       placeHolder,
                       bgColor,
                       onChangeText,
                       onSubmitEditing,
                       disable,
                       ...rest
                   }: Props) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.textContainer}>{title}</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    autoCapitalize="none"
                    numberOfLines={1}
                    onChangeText={onChangeText}
                    placeholder={placeHolder}
                    style={[{ backgroundColor: `${bgColor}` }, styles.loginInputContainer]}
                    value={labelValue}
                    editable={disable}
                    {...rest}
                />
            </View>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTextContainer}>{subTitle}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        alignSelf: 'center',
    },
    loginInputContainer: {
        borderColor: '#dcdcdc',
        borderRadius: 10,
        borderWidth: 2,
        height: 47,
        paddingLeft: 15,
        width: 338,
    },
    mainContainer: {
        width: '100%',
    },
    subTextContainer: {
        color: 'black',
        fontSize: 11,
    },
    subTitleContainer: {
        alignItems: 'flex-end',
        right: 70,
    },
    textContainer: {
        color: GLOBAL_COLORS.darkText,
        fontSize: GLOBAL_FONTSIZES.info,
        fontWeight: 'bold' as const,
        letterSpacing: 0.09,
        textAlign: 'center',
    },
    titleContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        left: 5,
    },
});
export default TextField;
