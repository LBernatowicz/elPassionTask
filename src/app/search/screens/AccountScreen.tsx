import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Image,} from "react-native";
import Header from "../../ui/components/Header";
import Button from "../../ui/components/Button";
import {useNavigation} from "@react-navigation/native";
import TextField from "../components/TextField";

type Props = {
    route: any;
}
const AccountScreen = ({route}: Props) => {
    const navigation = useNavigation();
    const [data, setData] = useState({
        avatar_url: '.',
        name: '.',
        followers: '.',
        blog: '.',
        email: '.',
        company: '.',
        full_name: '.',
        description: '.',
    });
    const { title, user, id } = route.params;
    const getUserByName = async (search: string) => {
        const url = `https://api.github.com/users/${search}`;
        try {
            const response = await fetch(
                url, {
                    method: 'GET',
                }
            )
            const json = await response.json();
            setData(json);
            console.log(`odpowiedz`, json);
        } catch (error) {
            console.error(error);
        }
    };

    const getReposByName = async (id: string) => {
        const url = `https://api.github.com/repositories?${id}`;
        try {
            const response = await fetch(
                url, {
                    method: 'GET',
                }
            )
            const json = await response.json();
            setData(json[0]);
            console.log(`odpowiedz`, json);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        if(user){
            getUserByName(title)
        } else getReposByName(id)
    },[])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header/>
            {user ?
            (<View style={styles.logoContainer}>
                <Image source={{uri: data.avatar_url}}
                       style={styles.image}
                />
            </View>) : (<View style={styles.disabledLogoContainer}></View>)
            }
            <View style={styles.bodyContainer}>
                <ScrollView style={styles.contentContainer}>
                    <TextField
                        labelValue={data.name ? data.name : '-'}
                        title={'Name'}
                        disable={false}
                    />
                    {user ?
                    (<TextField
                        labelValue={data.followers.toString() ? data.followers.toString() : '-'}
                        title={'Followers'}
                        disable={false}
                    />
                    ) : (
                            <TextField
                                labelValue={data.description ? data.description : '-'}
                                title={'Description'}
                                disable={false}
                            />
                        ) }
                    <TextField
                        labelValue={data.blog ? data.blog : '-'}
                        title={'Blog'}
                        disable={false}
                    />
                    <TextField
                        labelValue={data.email ? data.email : '-'}
                        title={'E-mail'}
                        disable={false}
                    />
                    {user ?
                        (<TextField
                                labelValue={data.company ? data.company : '-'}
                                title={'Company'}
                                disable={false}
                            />
                        ) : (
                            <TextField
                                labelValue={data.full_name ? data.full_name : '-'}
                                title={'Full name'}
                                disable={false}
                            />
                        ) }
                </ScrollView>
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
    disabledLogoContainer: {
        bottom: '30%',
        backgroundColor: 'transparent',
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
        height: '60%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentContainer: {
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
        height: 50,
        borderRadius: 10,
    }
})


export default AccountScreen;
