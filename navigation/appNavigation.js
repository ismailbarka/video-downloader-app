import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {



        return (
            <NavigationContainer >
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
  }