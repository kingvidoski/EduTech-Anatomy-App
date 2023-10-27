import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background, ModelView } from "../components";
import { ArrowLeft, Logo } from "../assets";

const SelectModel = ({ navigation }) => {
  // Comments

  return (
    <SafeAreaView className="relative bg-bgColor h-full px-5 z-0">
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

      <Text className="text-base text-[#000] font-bold mt-14 mb-5">
        3D Models
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} className="h-full">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ModelViewer", {
              title: "Lumber Vertebrae",
              model: "model1",
            })
          }
          className="bg-[#000000b1] h-[160px] rounded-[9px] mb-6 relative overflow-hidden"
        >
          <Text className="text-base text-bgWhite font-bold text-center absolute top-[66px] left-[100px] z-10">
            Lumbar Vertebrae
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ModelViewer", {
              title: "Lumber Vertebrae",
              model: "model2",
            })
          }
          className="bg-[#000000b1] h-[160px] rounded-[9px] mb-6 relative overflow-hidden"
        >
          <Text className="text-base text-bgWhite font-bold text-center absolute top-[66px] left-[100px] z-10">
            Sacrum Vertebrae
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ModelViewer", {
              title: "Lumber Vertebrae",
              model: "model3",
            })
          }
          className="bg-[#000000b1] h-[160px] rounded-[9px] mb-6 relative overflow-hidden"
        >
          <Text className="text-base text-bgWhite font-bold text-center absolute top-[66px] left-[100px] z-10">
            Lumbar Vertebrae
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SelectModel;
