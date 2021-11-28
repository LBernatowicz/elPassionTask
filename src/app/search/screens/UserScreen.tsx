import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Image} from "react-native";
import Header from "../../ui/components/Header";

// "avatar_url":"https://avatars.githubusercontent.com/u/10235880?v=4",
//     "bio":null,
//     "blog":"",
//     "company":null,
//     "created_at":"2014-12-18T18:44:44Z",
//     "email":null,
//     "events_url":"https://api.github.com/users/chuj/events{/privacy}",
//     "followers":4,
//     "followers_url":"https://api.github.com/users/chuj/followers",
//     "following":1,
//     "following_url":"https://api.github.com/users/chuj/following{/other_user}",
//     "gists_url":"https://api.github.com/users/chuj/gists{/gist_id}",
//     "gravatar_id":"",
//     "hireable":null,
//     "html_url":"https://github.com/chuj",
//     "id":10235880,
//     "location":null,
//     "login":"chuj",
//     "name":"Jonathan Chu",
//     "node_id":"MDQ6VXNlcjEwMjM1ODgw",
//     "organizations_url":"https://api.github.com/users/chuj/orgs",
//     "public_gists":0,
//     "public_repos":7,
//     "received_events_url":"https://api.github.com/users/chuj/received_events",
//     "repos_url":"https://api.github.com/users/chuj/repos",
//     "site_admin":false,
//     "starred_url":"https://api.github.com/users/chuj/starred{/owner}{/repo}",
//     "subscriptions_url":"https://api.github.com/users/chuj/subscriptions",
//     "twitter_username":null,
//     "type":"User",
//     "updated_at":"2021-05-18T19:41:57Z",
//     "url":"https://api.github.com/users/chuj"

type Props = {
    route: any;
    navigation: any;

}
const UserScreen = ({route}: Props) => {
    const [userData, setUserData] = useState([])
    const { title } = route.params;
    console.log(title)
    const getUserByName = async (search: string) => {
        const url = `https://api.github.com/user/${title}`;
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
        getUserByName(searchValue)
        //requestUserRepos(searchValue)
        //console.log(searchValue)
    },[route])
    console.log(userData.avatar_url)
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header/>
            <View style={styles.logoContainer}>
               <Image source={{uri: userData.avatar_url}}
                    style={styles.image}
               />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        alignItems: 'center',
    },
    logoContainer: {
        bottom: '30%',
        backgroundColor: 'red',
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
})


export default UserScreen;
