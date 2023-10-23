import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ModelsScreen } from "../Screens";



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                header: () => null,
                tabBarIconStyle: { display: 'none' },
                tabBarLabelStyle: {
                    fontFamily: 'Plus-SemiBold',
                    fontSize: 16,
                    fontWeight: '600',
                    //   lineHeight: digits?.lineHeight,
                },
                tabBarStyle: {
                    //   height: digits?.height,

                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
                tabBarActiveBackgroundColor: 'black',
                tabBarInactiveBackgroundColor: 'white',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Models"
                component={ModelsScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator
