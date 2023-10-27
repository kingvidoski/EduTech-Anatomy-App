import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../components";
import { ArrowLeft, Logo } from "../assets";
import SelectUI from "../components/SelectUI";

const FirstSemester = ({ navigation, route }) => {
  const { query } = route.params;
  console.log(query);

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
            <SelectUI title="Physics" onPress={handleSemester} />
          </View>
          <View>
            <SelectUI title="Chemistry" onPress={handleSemester} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FirstSemester;
