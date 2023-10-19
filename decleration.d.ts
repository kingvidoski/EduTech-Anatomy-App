import { Object3DNode } from "@react-three/fiber";
import { PanGestureHandler } from "react-native-gesture-handler";

declare module "@react-three/fiber" {
  interface ThreeElements {
    panGestureHandler: Object3DNode<
      PanGestureHandler,
      typeof PanGestureHandler
    >;
  }
}
