import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ArrowLeft, Logo } from "../assets";
import { ModelView } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";

const ModelViewer = ({ navigation, route }) => {
  const { title, model } = route.params;

  const [show, setShow] = useState(true);

  function handleSwitch() {
    if (show === false) {
      return navigation.goBack();
    } else if (show === true) {
      return setShow(false);
    }
  }
  return (
    <SafeAreaView className="bg-bgColor h-full px-5 z-0">
      {/* Header */}
      <View className="relative mt-5">
        <TouchableOpacity
          onPress={() => handleSwitch()}
          className="absolute top-3"
        >
          <ArrowLeft />
        </TouchableOpacity>
        <View className="mx-auto">
          <Logo />
        </View>
      </View>

      <Text className="text-base text-[#000] font-bold mt-14 mb-5">
        {title}
      </Text>

      {show && (
        <View className="h-full -mt-[120px]">
          {model === "model1" && (
            <ModelView
              zoom={30}
              mtl={require("../models/3DModel.mtl")}
              obj={require("../models/model1.obj")}
              jpg={require("../models/3DModel.jpg")}
            />
          )}

          {model === "model2" && (
            <ModelView
              zoom={30}
              mtl={require("../models/model2/3DModel.mtl")}
              obj={require("../models/model2/3DModel.obj")}
              jpg={require("../models/model2/3DModel.jpg")}
            />
          )}

          {model === "model3" && (
            <ModelView
              zoom={30}
              mtl={require("../models/model3/3DModel.mtl")}
              obj={require("../models/model3/3DModel.obj")}
              jpg={require("../models/model3/3DModel.jpg")}
            />
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default ModelViewer;
