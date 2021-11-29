import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Image, Text} from "react-native";
import Header from "../../ui/components/Header";
import Button from "../../ui/components/Button";
import {useNavigation} from "@react-navigation/native";
import TextField from "../components/TextField";

type Props = {
    route: any;
}
const AccountScreen = ({route}: Props) => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState({
        avatar_url: '.',
        name: '.',
        followers: '.',
        blog: '.',
        email: '.',
        company: '.',
    });
    const { title } = route.params;
    console.log(title)
    const getUserByName = async (search: string) => {
        const url = `https://api.github.com/users/${search}`;
        try {
            const response = await fetch(
                url, {
                    method: 'GET',
                }
            )
            const json = await response.json();
            setUserData(json);
            console.log(`odpowiedz`, json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getUserByName(title)
        console.log(userData.avatar_url)
    },[])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header/>
            <View style={styles.logoContainer}>
               <Image source={{uri: userData.avatar_url}}
                    style={styles.image}
               />
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.contentContainer}>
                    <TextField
                        labelValue={userData.name ? userData.name : '-'}
                        title={'Name'}
                        disable={false}
                    />
                    <TextField
                        labelValue={userData.followers.toString() ? userData.followers.toString() : '-'}
                        title={'Followers'}
                        disable={false}
                    />
                    <TextField
                        labelValue={userData.blog ? userData.blog : '-'}
                        title={'Blog'}
                        disable={false}
                    />
                    <TextField
                        labelValue={userData.email ? userData.email : '-'}
                        title={'E-mail'}
                        disable={false}
                    />
                    <TextField
                        labelValue={userData.company ? userData.company : '-'}
                        title={'Comapny'}
                        disable={false}
                    />
                </View>
                <View style={styles.bottomContainer}>
                    <Button title={'Back'} onPress={()=>navigation.goBack()} style={styles.button}/>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        alignItems: 'center',
        shadowOffset: {
            height: 3,
            width: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
    logoContainer: {
        bottom: '30%',
        backgroundColor: 'white',
        width: 150,
        height: 150,
        borderRadius: 150/2,
    },
    image:{
        borderRadius: 150/2,
        width: 150,
        height: 150,
        resizeMode: 'stretch',
    },
    bodyContainer: {
        bottom: '28%',
        width: '100%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    contentContainer: {
        justifyContent: 'space-between',
        width: '90%',
        height: '90%',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowOffset: {
            height: 3,
            width: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
    bottomContainer: {
        width:'90%',
        backgroundColor: 'transparent',
    },
    button: {
        width:'100%',
        borderRadius: 10,
    }
})


export default AccountScreen;
