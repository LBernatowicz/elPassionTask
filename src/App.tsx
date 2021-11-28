import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreen from "./app/auth/screens/WelcomeScreen";
import SearchScreen from "./app/search/screens/SearchScreen";
import UserScreen from "./app/search/screens/UserScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator
              initialRouteName={"WelcomeScreen"}
              screenOptions={{
                headerShown: false
          }}>
              <Stack.Screen name={"Welcome"} component={WelcomeScreen}/>
              <Stack.Screen name={"Search"} component={SearchScreen}/>
              <Stack.Screen name={"User"} component={UserScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
