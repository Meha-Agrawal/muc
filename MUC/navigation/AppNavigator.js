import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainTabNavigator from "./MainTabNavigator";
import HomeScreen from "../screens/HomeScreen";
import TimerScreen from "../screens/TimerScreen";
import RatingScreen from "../screens/RatingScreen";
import WeatherScreen from "../screens/WeatherScreen";
import MusicScreen from "../screens/MusicScreen";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Home: HomeScreen,
    Timer: TimerScreen,
    Weather: WeatherScreen,
    Music: MusicScreen,
    Rating: RatingScreen
  })
);
