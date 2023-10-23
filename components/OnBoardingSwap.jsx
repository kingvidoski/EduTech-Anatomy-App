import { View, Text } from "react-native";
import React from "react";
import { Musclesvg, Musclesvg2 } from "../assets";

const OnBoardingSwap = ({ step }) => {
  switch (step) {
    case 1:
      return (
        <View className="">
          <Musclesvg />
          <Text className="w-[199px] text-sm text-blackColor font-poppins font-normal text-center mx-auto mt-[19px]">
            Learn, Experience
            <Text className="text-sm text-blueColor font-poppinsBold font-bold">
              {" "}
              3D{" "}
            </Text>
            virtual reality
          </Text>
        </View>
      );
      break;

    default:
      return (
        <View className="">
          <Musclesvg2 />
          <Text className="w-[199px] text-sm text-blackColor font-poppins font-normal text-center mx-auto mt-[19px]">
            Get all lecture note on human anatomy
          </Text>
        </View>
      );
  }
};

export default OnBoardingSwap;
