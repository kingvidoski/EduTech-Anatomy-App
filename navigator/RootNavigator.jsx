import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AddNoteScreen,
  HomeScreen,
  ModelViewer,
  NoteLevel,
  NoteOutline,
  NoteScreen,
  Onboarding,
  SelectModel,
  SplashScreen,
  WriteNote,
} from "../Screens";
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

      <RootStack.Group>
        <RootStack.Screen name="NoteLevel" component={NoteLevel} />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="Semester" component={TabNavigator} />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="NoteOutline" component={NoteOutline} />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="NoteScreen" component={NoteScreen} />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="AddNote" component={AddNoteScreen} />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="WriteNote" component={WriteNote} />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="SelectModel" component={SelectModel} />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="ModelViewer" component={ModelViewer} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
