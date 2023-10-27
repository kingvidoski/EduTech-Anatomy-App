import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const LightAddNote = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    {...props}
  >
    <Circle cx={18} cy={18} r={18} fill="white" />
    <Path
      d="M18 11V25"
      stroke="#1E1E1E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 18H25"
      stroke="#1E1E1E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default LightAddNote;
