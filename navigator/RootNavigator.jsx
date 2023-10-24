import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, Onboarding, SplashScreen } from "../Screens";
import TabNavigator from "./TabNavigator";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Group>
        <RootStack.Screen name="Splash" component={SplashScreen} />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="OnBoarding" component={Onboarding} />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="Main" component={HomeScreen} />
      </RootStack.Group>

      {/* <RootStack.Group>
        <RootStack.Screen name="Models" component={Model} />
      </RootStack.Group> */}

      <RootStack.Group>
        <RootStack.Screen name="Semester" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
