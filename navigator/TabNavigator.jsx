import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FirstSemester, SecondSemester } from "../Screens";
import { useEffect, useState } from "react";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [digits, setDigits] = useState({
    height: null,
    lineHeight: null,
  });

  useEffect(() => {
    const getPlatform = () => {
      if (Platform.OS === "ios") {
        setDigits({
          height: 70,
          lineHeight: 69,
        });
      } else if (Platform.OS === "android") {
        setDigits({
          height: 60,
          lineHeight: 70,
        });
      }
    };

    getPlatform();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
        tabBarIconStyle: { display: "none" },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "600",
          lineHeight: digits?.lineHeight,
        },
        tabBarStyle: {
          height: digits?.height,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarActiveBackgroundColor: "black",
        tabBarInactiveBackgroundColor: "white",
      }}
    >
      <Tab.Screen name="First Semester" component={FirstSemester} />
      <Tab.Screen name="Second Semester" component={SecondSemester} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
