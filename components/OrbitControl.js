import React, { useRef } from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

export const OrbitControlsWrapper = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => {
    controlsRef.current.update();
  });

  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};
