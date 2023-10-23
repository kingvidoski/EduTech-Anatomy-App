import React, { useState } from "react";
import { View } from "react-native";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Suspense, useRef } from "react";
import { PanGestureHandler, State } from "react-native-gesture-handler";

interface ModelProps {
    scale: number;
}

function Model(props: ModelProps) {
    const obj = useLoader(OBJLoader, require("./models/model1.obj"));
    const meshRef = useRef<any>();

    return (
        <mesh ref={meshRef}>
            <primitive object={obj} scale={props.scale} />
        </mesh>
    );
}

function ModelView() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Model scale={10} />
            </Suspense>
        </Canvas>
    );
}

export default function ModelComponent() {
    const [rotation, setRotation] = useState(0);

    const onGestureEvent = (event: { nativeEvent: { state: State; translationX: number } }) => {
        if (event.nativeEvent.state === State.BEGAN) {
            setRotation(event.nativeEvent.translationX * 0.01);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <View style={{ flex: 1 }}>
                    <ModelView />
                </View>
            </PanGestureHandler>
        </View>
    );
}
