import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

const App = () => {
  const [loadingAssest, setLoadingAssest] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      // Font Preloading
      await Font.loadAsync({
        "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
      });

      setLoadingAssest(true);
      console.log("loadAssets complete!!!");
    };

    loadAssets();
  }, []);

  if (!loadingAssest) return null;

  return (
    <>
      {loadingAssest && (
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
