import "react-native-gesture-handler";
import ModelView from "./components/Model";
import { SafeAreaView, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    // </GestureHandlerRootView>
    <View style={{ flex: 1 }}>
      <ModelView />
    </View>
  );
};

export default App;
