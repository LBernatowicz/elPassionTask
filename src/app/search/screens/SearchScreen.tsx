import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, TextInput, Text} from "react-native";
import {GLOBAL_COLORS} from "../../ui/const";
import Header from "../../ui/components/Header";
import Tile from "../components/Tile";
import useDebounce from "../../ui/components/Debounce";

const SearchScreen = () => {
    const [searchValue, setSearchValue] = useState('');
    const [usersList, setUserList] = useState([]);
    const [reposList, setReposList] = useState([]);
    const [visableUserData, setVisableUserData] = useState([]);
    const [visableReposData, setVisableReposData] = useState([]);
    const [visableData, setVisableData] = useState([{}])
    const [isLoadedUsers, setIsLoadedUsers] = useState(false)
    const [isLoadedRepos, setIsLoadedRepos] = useState(false)
    const debouncedSearchValue = useDebounce(searchValue, 800)

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
            setVisableUserData(json);
            setIsLoadedUsers(true)
        } catch (error) {
            console.error(error);
        }
    };

    const getRepo = async () => {
        const url = `https://api.github.com/repositories?per_page=100`;
        try {
            const response = await fetch(
                url, {
                    method: 'GET',
                }
            )
            const json = await response.json();
            setReposList(json)
            setVisableReposData(json)
            setIsLoadedRepos(true)
        } catch (error) {
            console.error(error);
        }
    };

    const handleFilter = (baseArray:Array<object>, searchType:string, searchText:string, setState: Function) => {
        let data: any = []
        baseArray.filter((element: any) => {
            if (element[searchType].indexOf(searchText.toLowerCase()) !== -1) {
                data.push(element)
            }
        })
        setState(data)

    }

    const handleConcat = (arr1: Array<object>, arr2: Array<object>) => {
        const data = [...arr1, ...arr2].sort((arr1, arr2) => arr1.id-arr2.id);
        setVisableData(data)
    }

    useEffect(() => {
        console.log(debouncedSearchValue)
    },[debouncedSearchValue])

    useEffect(()=> {
        getUsers();
        getRepo();
    }, [])

    useEffect(() => {
        if (isLoadedUsers && isLoadedRepos) handleConcat(visableUserData, visableReposData);
    },[isLoadedUsers, isLoadedRepos])

    useEffect(() => {
        handleFilter(usersList, 'login', debouncedSearchValue, setVisableUserData);
        handleFilter(reposList, 'name', debouncedSearchValue, setVisableReposData);
        console.log(visableData)
    },[debouncedSearchValue])

    useEffect(() => {
        handleConcat(visableUserData, visableReposData);
    },[visableReposData])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header/>
            <View style={styles.searchContainer}>
                <View>
                    <Text>Github search aplication</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        onChangeText={setSearchValue}
                        value={searchValue}
                        style={styles.textInput}
                        numberOfLines={1}
                        placeholder={'Search login or repos'}
                    />
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <ScrollView
                    snapToAlignment={'center'}
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                >
                    {visableData && visableData.map((item:any, index: number) => (
                        <Tile
                            key={index}
                            title={item.login ? item.login : item.name ? item.name : ''}
                            id={item.id}
                            user={!!item.login }
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
        justifyContent: 'center',
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