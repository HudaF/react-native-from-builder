import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Module from "./src/screens/Module";
import Profileselect from "./src/screens/Profileselect";
import Submdolue from "./src/screens/Submdolue";

const DrawerNavigation = createDrawerNavigator({
  Module: Module,
  Profileselect: Profileselect,
  Submdolue: Submdolue
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Module: Module,
    Profileselect: Profileselect,
    Submdolue: Submdolue
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
      "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
      "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
      "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
      "Poppins-Light": require("./src/assets/fonts/Poppins-Light.ttf"),
      "poppins-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "poppins-600": require("./src/assets/fonts/roboto-regular.ttf")
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
