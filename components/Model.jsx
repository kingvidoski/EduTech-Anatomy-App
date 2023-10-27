import React, { useLayoutEffect, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { TextureLoader } from "expo-three";
import { Suspense } from "react";

function Model({ moveCamera, obj: object, jpg, mtl }) {
  const material = useLoader(MTLLoader, mtl);
  const [normal] = useLoader(TextureLoader, [jpg]);

  const obj = useLoader(OBJLoader, object, (loader) => {
    material.preload();
    loader.setMaterials(material);
  });

  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = normal;
        child.geometry.center();
      }
    });
  }, [obj]);

  const meshRef = useRef();
  const rotationSpeed = 70;

  const onPointerMove = (event) => {
    if (event.nativeEvent.changedTouches.length === 1) {
      const touch = event.nativeEvent.changedTouches[0];
      const dx = touch.locationX;
      const dy = touch.locationY;

      moveCamera(dx, dy);

      meshRef.current.rotation.y += (dy * Math.PI * rotationSpeed) / 520;
      meshRef.current.rotation.x += (dx * Math.PI * rotationSpeed) / 520;

      console.log((dy * Math.PI * rotationSpeed) / 320);
      meshRef.current.rotation.x += (dx * Math.PI * rotationSpeed) / 520;
      meshRef.current.rotation.y += (dy * Math.PI * rotationSpeed) / 520;
    }
  };

  return (
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

export default function ModelView({ zoom, jpg, mtl, obj }) {
  const [cameraPosition, setCameraPosition] = useState([0, 0, zoom]);

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
        <Model moveCamera={moveCamera} jpg={jpg} obj={obj} mtl={mtl} />
      </Suspense>
    </Canvas>
  );
}
