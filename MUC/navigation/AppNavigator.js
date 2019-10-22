import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import TimerScreen from "../screens/TimerScreen";
import RatingScreen from "../screens/RatingScreen";
import WeatherScreen from "../screens/WeatherScreen";
import MusicScreen from "../screens/MusicScreen";
import DirectionsScreen from "../screens/DirectionsScreen";
import CurrentTimeScreen from "../screens/CurrentTimeScreen";
import GeneralSearchScreen from "../screens/GeneralSearchScreen";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Home: HomeScreen,
    Timer: TimerScreen,
    Weather: WeatherScreen,
    Music: MusicScreen,
    Directions: DirectionsScreen,
    CurrentTime: CurrentTimeScreen,
    GeneralSearch: GeneralSearchScreen,
    Rating: RatingScreen
  })
);
