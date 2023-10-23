import * as React from "react";
import Svg, { G, Rect, Circle, Defs, ClipPath } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const HomescreenBg = (props) => (
  <Svg
    width={375}
    height={812}
    viewBox="0 0 375 812"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_16_56)">
      <Rect width={375} height={812} fill="black" />
      <G filter="url(#filter0_f_16_56)">
        <Circle cx={205.5} cy={212} r={50} fill="#B9000B" />
      </G>
      <G filter="url(#filter1_f_16_56)">
        <Circle cx={205.5} cy={392} r={50} fill="#1167B1" />
      </G>
      <G filter="url(#filter2_f_16_56)">
        <Circle cx={205.5} cy={572} r={50} fill="#9F2312" />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_16_56">
        <Rect width={375} height={812} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HomescreenBg;
