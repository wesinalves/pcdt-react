import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Topics from "../screens/Topics";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator tabBar={props=><CustomTabBar {... props} /> }>
            <Tab.Screen name="Topics" component={Topics}/>
            <Tab.Screen name="Favorites" component={Favorites}/>
            <Tab.Screen name="Search" component={Topics}/>
            <Tab.Screen name="Profile" component={Profile}/>            
        </Tab.Navigator>
    );
}
