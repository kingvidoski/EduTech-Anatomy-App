import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const QuizIcon = () => {
  return (
    <TouchableOpacity className="relative w-8 h-8 ml-auto items-center justify-center bg-bgBlack rounded-full">
      {[...Array(3).keys()].map((index) => {
        return (
          <MotiView
            key={index}
            from={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 0, scale: 2 }}
            transition={{
              type: "timing",
              duration: 2000,
              easing: Easing.out(Easing.ease),
              delay: index * 300,
              repeatReverse: false,
              loop: true,
            }}
            className="absolute w-8 h-8 bg-bgBlack rounded-full"
          />
        );
      })}
      <Text className="text-bgWhite text-[9px] font-poppinsBold font-bold">
        Quiz
      </Text>
    </TouchableOpacity>
  );
};

export default QuizIcon;
