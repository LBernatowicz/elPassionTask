import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreen from "./app/auth/screens/WelcomeScreen";
import SearchScreen from "./app/search/screens/SearchScreen";

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
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
