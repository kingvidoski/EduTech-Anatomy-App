import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background, Musclesvg3, OnBoardingSwap } from "../components";
import useToggle from "../hooks/useToggle";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [skip, setSkip] = useToggle(false);
  const isSlected = "w-[49px] h-[6px] bg-[#1E1E1E] rounded-[47px]";

  function handleStep() {
    if (step === 2) {
      setStep(3);
      setSkip();
    } else {
      setStep((prev) => prev + 1);
    }
  }

  return (
    <SafeAreaView className="relative h-full px-5 bg-[#E7E7E7] items-center justify-center">
      {/* Background */}
      <View className="absolute z-0">
        <Background />
      </View>

      <View className="w-full h-[410px]">
        {skip ? (
          <View className="">
            <Musclesvg3 />
            <Text className="w-[199px] text-sm text-bgBlack font-poppins font-normal text-center mx-auto mt-[19px]">
              Learn, Experience
              <Text className="text-sm text-bgBlack font-poppinsBold font-bold">
                {" "}
                3D{" "}
              </Text>
              with {"\n"}
              <Text className="block">virtual reality</Text>
            </Text>
          </View>
        ) : (
          <OnBoardingSwap step={step} />
        )}
      </View>

      {/* caurosel dots */}
      <View className="flex-row mb-[21px] gap-2">
        <View
          className={
            step === 1 ? isSlected : "w-[10px] h-[6px] bg-[#fff] rounded-[47px]"
          }
        />
        <View
          className={
            step === 2 ? isSlected : "w-[10px] h-[6px] bg-[#fff] rounded-[47px]"
          }
        />
        <View
          className={
            skip ? isSlected : "w-[10px] h-[6px] bg-[#fff] rounded-[47px]"
          }
        />
      </View>

      {/* Buttons */}
      <View className="w-full">
        {!skip ? (
          <>
            <TouchableOpacity
              className="w-full pt-3 pb-[14px] mb-6 bg-bgBlack rounded items-center"
              onPress={handleStep}
            >
              <Text className="text-sm text-bgWhite font-bold">Next</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-full pt-3 pb-[14px] rounded shadow-sm items-center"
              onPress={[setSkip]}
            >
              <Text className="text-sm text-blackColor font-poppins font-normal">
                Skip
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            className="w-full pt-3 pb-[14px] mb-6 bg-bgBlack rounded items-center"
            onPress={() => navigation.navigate("Main")}
          >
            <Text className="text-sm text-bgWhite font-bold">Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
