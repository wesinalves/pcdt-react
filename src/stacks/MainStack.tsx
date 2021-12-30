import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login';
import Preload from '../screens/Preload';
import MainTab from '../stacks/MainTab';
import TopicDetails from '../screens/TopicDetails';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator 
            initialRouteName="Preload"
            screenOptions={{
                headerShown: false
            }}
        > 
            <Stack.Screen name='Preload' component={Preload} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='MainTab' component={MainTab} />
            <Stack.Screen name='TopicDetails' component={TopicDetails} />
        </Stack.Navigator>
    );
}

