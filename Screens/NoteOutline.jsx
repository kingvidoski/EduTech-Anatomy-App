import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import SelectUI from "../components/SelectUI";
import { Background } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, Logo } from "../assets";

const NoteOutline = ({ navigation }) => {
  //something

  function handleSemester(navigation) {
    navigation.navigate("NoteScreen");
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
        <Text className="text-[15px] text-[#000] font-semibold mb-[23px]">
          Mathematics Outline
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
            <SelectUI title="Logarithm" onPress={handleSemester} />
          </View>
          <View>
            <SelectUI title="Indicies" onPress={handleSemester} />
          </View>
          <View>
            <SelectUI title="Matrix" onPress={handleSemester} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NoteOutline;
