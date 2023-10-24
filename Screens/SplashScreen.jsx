import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  Background,
  SplashSkull,
  SplashVector,
  SplashVector2,
  Tag,
} from "../components";

const SplashScreen = ({}) => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("OnBoarding");
    }, 3000);
  }, []);

  return (
    <SafeAreaView className="relative w-full h-full bg-[#E7E7E7] items-center justify-center">
      {/* Background */}
      <View className="absolute z-0">
        <Background />
      </View>

      {/* Middle component */}
      <View className="mb-8">
        <Text className="text-[22px] text-[#1E1E1E] font-poppinsSemiBold font-semibold">
          Human Anatomy
        </Text>
        <View className="flex-row gap-2 mx-auto">
          <Tag />
          <Text className="font-poppins text-[#1E1E1E] text-sm font-normal">
            Anatomy Reality
          </Text>
        </View>
      </View>

      {/* Skull Image in the Middle */}
      <SplashSkull />

      <View className="absolute top-0 right-0">
        <SplashVector />
      </View>
      <View className="absolute bottom-0 left-0">
        <SplashVector2 />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
