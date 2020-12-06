import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import DailyLogin1 from "./src/screens/DailyLogin1";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Splash1 from "./src/screens/Splash1";
import Untitled from "./src/screens/Untitled";
import Untitled1 from "./src/screens/Untitled1";

const DrawerNavigation = createDrawerNavigator({
  DailyLogin1: DailyLogin1,
  Home: Home,
  Profile: Profile,
  Splash1: Splash1,
  Untitled: Untitled,
  Untitled1: Untitled1
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    DailyLogin1: DailyLogin1,
    Home: Home,
    Profile: Profile,
    Splash1: Splash1,
    Untitled: Untitled,
    Untitled1: Untitled1
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "rubik-700": require("./src/assets/fonts/rubik-700.ttf"),
      "rubik-500": require("./src/assets/fonts/rubik-500.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
