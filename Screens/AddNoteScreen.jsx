import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { Background } from "../components";
import { ArrowLeft, Delete, LightAddNote, Logo } from "../assets";
import { SafeAreaView } from "react-native-safe-area-context";

const AddNoteScreen = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width * 0.43;

  function truncate(value) {
    const words = value.split(" ");
    const truncatedWords = words.slice(0, 4);
    const truncatedString = truncatedWords.join(" ");
    return truncatedString;
  }

  return (
    <SafeAreaView className="px-5">
      {/* Background */}
      <View className="absolute z-0">
        <Background />
      </View>

      {/* Header */}
      <View className="relative mt-5">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-3"
        >
          <ArrowLeft />
        </TouchableOpacity>
        <View className="mx-auto">
          <Logo />
        </View>

        <TouchableOpacity className="absolute top-3 right-0">
          <Delete />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="mt-10 h-full">
        <View className="flex-row flex-wrap justify-between gap-3">
          {/* addNote */}
          <TouchableOpacity
            style={{ width: windowWidth }}
            className="h-[168px] rounded-[10px] bg-bgBlack justify-center items-center"
            activeOpacity={0.4}
          >
            <TouchableOpacity onPress={() => navigation.navigate("WriteNote")}>
              <LightAddNote />
            </TouchableOpacity>
            <Text className="text-base text-[#fff] font-normal mt-2">
              Add note
            </Text>
          </TouchableOpacity>

          {/* isHaveNote */}
          <TouchableOpacity
            style={{ width: windowWidth }}
            className="w-[174px] h-[168px] px-3 rounded-[10px] bg-bgBlack justify-center items-center"
            activeOpacity={0.4}
          >
            <Text className="text-base text-[#fff] text-center font-normal mt-2">
              {truncate(
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis labore "
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNoteScreen;
