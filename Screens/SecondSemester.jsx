import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import SelectUI from "../components/SelectUI";
import { ArrowLeft, Logo } from "../assets";
import { Background } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";

const SecondSemester = ({ navigation }) => {
  //something

  function handleSemester(navigation) {
    navigation.navigate("NoteOutline");
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
          onPress={() => navigation.navigate("NoteLevel")}
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

        <ScrollView
          showsVerticalScrollIndicator={false}
          className="space-y-[35px] h-full"
        >
          {/* {["Mathem", "200 Level", "300 Level", "400 Level"].map(
            (level, i) => {
              return (
                <View key={i}>
                  <SelectUI title={level} param={level.split(" ")[0]} />
                </View>
              );
            }
          )} */}
          <View>
            <SelectUI title="Mathematics" onPress={handleSemester} />
          </View>
          <View>
            <SelectUI title="English language" onPress={handleSemester} />
          </View>
          <View>
            <SelectUI title="Genetics" onPress={handleSemester} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SecondSemester;
