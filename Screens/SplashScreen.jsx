import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { SplashSkull, SplashVector, SplashVector2, Tag } from "../components";

const SplashScreen = ({}) => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("OnBoarding");
    }, 3000);
  }, []);

  return (
    <SafeAreaView className="relative h-full bg-[#fff] items-center justify-center">
      {/* Middle component */}
      <View className="mb-8">
        <Text className="text-[22px] text-[#1167B1] font-poppinsSemiBold font-semibold">
          Human Anatomy
        </Text>
        <View className="flex-row gap-2 mx-auto">
          <Tag />
          <Text className="font-poppins text-[#1167B1] text-sm font-normal">
            Anatomy Reality
          </Text>
        </View>
      </View>

      {/* Skull Image in the Middle */}
      <SplashSkull />
      {/* <Image
                source={require('../assets/splash-skull.png')}
                className='object-contain'
            /> */}

      {/* Water-mark of Skull Images */}
      <View className="absolute top-32">
        <Image
          source={require("../assets/watermarkSkull.png")}
          className="object-contain"
        />
      </View>

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
