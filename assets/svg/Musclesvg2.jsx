import * as React from "react";
import Svg, { Circle, Defs, Pattern, Use, Image } from "react-native-svg";

const Musclesvg2 = (props) => (
  <Svg
    width={340}
    height={340}
    viewBox="0 0 340 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Circle cx={170} cy={170} r={170} fill="url(#pattern0)" />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_8_30"
          transform="translate(0 0.0915625) scale(0.000625)"
        />
      </Pattern>
      <Image
        id="image0_8_30"
        width={1600}
        height={1307}
      />
    </Defs>
  </Svg>
);
export default Musclesvg2;