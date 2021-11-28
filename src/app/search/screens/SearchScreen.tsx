import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, TextInput, Text} from "react-native";
import {GLOBAL_COLORS} from "../../ui/const";
import Button from "../../ui/components/Button";
import Header from "../../ui/components/Header";
import Tile from "../components/Tile";
import {useNavigation} from "@react-navigation/native";
import useDebounce from "../../ui/components/Debounce";

const SearchScreen = () => {
    const [searchData, setSearchData] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [usersList, setUserList] = useState([])
    const [visableData, setVisableData] = useState([])
    const debouncedSearchValue = useDebounce(searchValue, 800)
    const navigation = useNavigation()

        const getUsers = async () => {
            const url = `https://api.github.com/users?since=1&per_page=100`;
            try {
                const response = await fetch(
                    url, {
                        method: 'GET',
                    }
                )
                const json = await response.json();
                setUserList(json);

                console.log(`usersList`, json);
            } catch (error) {
                console.error(error);
            }
        };

    const handleFilter = (baseArray:any, searchType:string, searchText:string, ) => {
        setVisableData(baseArray.filter((element:any) => element.login.indexOf(searchText) !==-1))
    }

    useEffect(() => {
            setSearchData(debouncedSearchValue)
        },[debouncedSearchValue])

    useEffect(()=> {
        getUsers();
        setVisableData(usersList)
    }, [])

    useEffect(() => {
        handleFilter(usersList, 'login', searchValue);
        console.log(visableData)
    },[searchData])
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header/>
            <View style={styles.searchContainer}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        onChangeText={setSearchValue}
                        value={searchValue.toLowerCase()}
                        style={styles.textInput}
                        numberOfLines={1}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={"Users"}
                        onPress={()=>console.log('asdasd')}
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
                    {visableData && visableData.map((item:any) => (
                    <Tile
                        title={item.login}
                    />
                ))
                }
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
