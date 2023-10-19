import React, { useRef } from "react";
import { View } from "react-native";
import { GLView } from "expo-gl";
import {
  Renderer,
  TextureLoader,
  PerspectiveCamera,
  OrbitControls,
} from "expo-three";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";

const ModelViewer = () => {
  const groupRef = useRef();
  const cameraRef = useRef();

  const onContextCreate = async (gl) => {
    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    const scene = new THREE.Scene();
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(new THREE.PointLight(0xffffff, 1, 100));

    // Load and add your 3D model here using THREE.OBJLoader
    // const objLoader = new OBJLoader();
    // objLoader.load(
    //   "../../models/model1.obj",
    //   (object) => {
    //     // You can manipulate the loaded object before adding it to the scene
    //     scene.add(object);
    //   },
    //   (xhr) => {
    //     // Progress callback
    //     console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    //   },
    //   (error) => {
    //     console.error("An error occurred while loading the model:", error);
    //   }
    // );

    const obj = useLoader(OBJLoader, require("../models/model1.obj"));
    scene.add(obj);

    const controls = new OrbitControls(camera, gl.canvas);
    controls.enableZoom = true;
    controls.enableRotate = true;
    controls.enablePan = true;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    animate();
  };

  return (
    <View style={{ flex: 1 }} className="bg-red-400">
      <GLView style={{ flex: 1 }} onContextCreate={onContextCreate} />
    </View>
  );
};

export default ModelViewer;
