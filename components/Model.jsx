import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { TextureLoader } from "expo-three";
import { Suspense } from "react";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from "react-native-gesture-handler";
extend({ PanGestureHandler });

function Model(props) {
  const material = useLoader(MTLLoader, require("../models/3DModel.mtl"));
  const [normal] = useLoader(TextureLoader, [require("../models/3DModel.jpg")]);

  const obj = useLoader(
    OBJLoader,
    require("../models/model1.obj"),
    (loader) => {
      material.preload();
      loader.setMaterials(material);
    }
  );

  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = normal;
        child.geometry.center();
      }
    });
  }, [obj]);

  const meshRef = useRef();
  const rotationSpeed = 70; // Adjust this factor to control the rotation speed

  // useFrame((state, delta) => {
  //     meshRef.current.rotation.y += delta;
  //     meshRef.current.rotation.x += delta;
  // });
  const [previousPointer, setPreviousPointer] = useState({ x: 0, y: 0 });

  const onPointerMove = (event) => {
    if (event.nativeEvent.changedTouches.length === 1) {
      const touch = event.nativeEvent.changedTouches[0];
      const dx = touch.locationX;
      const dy = touch.locationY;

      props.moveCamera(dx, dy);

      setPreviousPointer({
        x: touch.locationX,
        y: touch.locationY,
      });

      meshRef.current.rotation.y += (dy * Math.PI * rotationSpeed) / 520;
      meshRef.current.rotation.x += (dx * Math.PI * rotationSpeed) / 520;

      console.log((dy * Math.PI * rotationSpeed) / 320);

      // // Capture delta movement for smoother rotation
      meshRef.current.rotation.x += (dx * Math.PI * rotationSpeed) / 520;
      meshRef.current.rotation.y += (dy * Math.PI * rotationSpeed) / 520;
      //   meshRef.current.rotation.y += dx * rotationSpeed;
      //   meshRef.current.rotation.x += dy * rotationSpeed;
    }
  };

  return (
    // <panGestureHandler>
    //   </panGestureHandler>
    <mesh
      ref={meshRef}
      rotation={[0.5, -0.2, 0]}
      onPointerMove={onPointerMove}
      style={{ cursor: "grab" }}
    >
      <primitive object={obj} scale={10} />
    </mesh>
  );
}

export default function ModelView() {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 30]);

  const moveCamera = (dx, dy) => {
    setCameraPosition((prevPosition) => [
      prevPosition[0] - dx * 0.1,
      prevPosition[1] - dy * 0.1,
      prevPosition[2],
    ]);
  };

  return (
    <Canvas camera={{ position: cameraPosition }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense>
        <Model moveCamera={moveCamera} />
      </Suspense>
    </Canvas>
  );
}
