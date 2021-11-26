import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, TextInput, Text} from "react-native";
import {GLOBAL_COLORS} from "../../ui/const";
import Button from "../../ui/components/Button";
import Header from "../../ui/components/Header";
import Tile from "../components/Tile";

const SearchScreen = () => {
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        console.log(searchValue)
    },[searchValue])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header/>
            <View style={styles.searchContainer}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        onChangeText={setSearchValue}
                        value={searchValue}
                        style={styles.textInput}
                        numberOfLines={1}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={"Users"}
                        onPress={()=>console.log('das')}
                        style={styles.buttonUsers}
                    />
                    <Button
                        title={"Respo"}
                        onPress={()=>console.log('das')}
                        style={styles.buttonRespo}
                    />
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <ScrollView
                    snapToAlignment={'center'}
                    contentContainerStyle={styles.scrollContainer}

                >
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        alignItems: 'center',
    },
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
    searchContainer:{
        bottom: '30%',
        elevation:6,
        alignItems: 'center',
        width: '90%',
        backgroundColor: 'white',
        shadowOffset: {
            height: 3,
            width: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        height: '15%',
        borderRadius: 10,
    },
    textInputContainer:{
        flexDirection: "row",
        width: '90%',
        height: 30,
        margin: 15,
        elevation: 5,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 1,
    },
    textInput:{
        flex:1,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    buttonSearch:{
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        width: '25%',
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '90%',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    buttonUsers:{
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: '48%',
    },
    buttonRespo:{
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        width: '48%',
    },
    bodyContainer: {
        bottom: '30%',
        width: '100%',
        justifyContent: 'center',
    },
    scrollContainer: {
        borderRadius: 10,
        width: '100%',
        elevation:2,
        shadowOffset: {
            height: 3,
            width: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        alignItems: 'center',
    }
})


export default SearchScreen;