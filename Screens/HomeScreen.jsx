import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background, Book, Glassmorphism, Logo, QuizIcon } from "../components";
import { useNavigation } from "@react-navigation/native";
import { Model } from "../assets";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="relative bg-bgColor h-full z-0">
      {/* Background */}
      <View className="absolute z-0">
        <Background />
      </View>

      <View className="h-full absolute px-5 pt-5 z-10">
        {/* Header */}
        <View className="w-full mt-5 flex-row items-center">
          <Logo />
          <QuizIcon />
        </View>

        <View className="flex-row items-center flex-1">
          <TouchableOpacity
            onPress={() => navigation.navigate("NoteLevel")}
            style={styles.shadowProp}
            className="w-40 h-44 border border-[#000] rounded-[5px] mr-4 items-center justify-center"
          >
            <Book />
            <Text className="text-bgBlack text-base font-poppins font-semibold mt-1">
              Lecture Note
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SelectModel")}
            style={styles.shadowProp}
            className="w-40 h-44 border border-[#000] rounded-[5px] items-center justify-center"
          >
            <Model />
            <Text className="text-bgBlack text-base font-poppins font-semibold mt-1">
              3D Models
            </Text>
          </TouchableOpacity>
        </View>

        <View className="items-center mb-5">
          <Text className="max-w-[210px] text-[8px] text-blackColor font-poppinsSemiBold font-semibold text-center">
            Cross River State University Of Technology Faculty Of
            <Text className="font-poppinsBold font-bold">
              {" "}
              Basic Medical Science
            </Text>{" "}
            Department
            <Text className="font-poppinsBold font-bold">
              {" "}
              Of Human Anatomy
            </Text>
          </Text>

          <View className="w-[31px] h-[31px] relative mt-3 overflow-hidden border-2 border-[#000] rounded-full">
            <Image
              source={require("../assets/crutechLogo.png")}
              className="mt-3 absolute -top-[10px] left-[1px]"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});
