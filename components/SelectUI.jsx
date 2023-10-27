import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SelectIcon } from "../assets";
import { useNavigation } from "@react-navigation/native";

const SelectUI = ({ title, param, onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => onPress(navigation, param)}
      className="flex-row items-center justify-between pt-[17px] pb-[18px] pl-[22px] pr-5 bg-selectInput border border-[#000] rounded-[10px]"
    >
      <Text className="text-[15px] text-[#000] font-normal">{title}</Text>
      <SelectIcon />
    </TouchableOpacity>
  );
};

export default SelectUI;
