import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, Logo } from "../assets";
import { Background } from "../components";
import SelectUI from "../components/SelectUI";

const NoteLevel = ({ navigation }) => {
  // something

  function handleNote(navigation, param) {
    navigation.navigate("Semester", {
      screen: "First Semester",
      params: { query: param },
    });
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
      </View>

      {/* Main section */}
      <View className="mt-20">
        <Text className="text-[15px] text-[#000] font-normal mb-[23px]">
          Lecture Note
        </Text>

        <View className="space-y-[35px]">
          {["100 Level", "200 Level", "300 Level", "400 Level"].map(
            (level, i) => {
              return (
                <View key={i}>
                  <SelectUI
                    title={level}
                    param={level.split(" ")[0]}
                    onPress={handleNote}
                  />
                </View>
              );
            }
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NoteLevel;
