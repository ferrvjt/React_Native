import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen.js";
import DetailsScreen from "../screens/ProductDetailsScreen.js";
import CartScreen from "../screens/CartScreen.js";

const stack = createStackNavigator()

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
        <stack.Navigator initialRouteName="Home">
            <stack.Screen name="Home" component={HomeScreen} />
            <stack.Screen name="ProductDetails" component={DetailsScreen} />
            <stack.Screen name="Cart" component={CartScreen} />
        </stack.Navigator>
        </NavigationContainer>
    ); 
}

export default MainStackNavigator