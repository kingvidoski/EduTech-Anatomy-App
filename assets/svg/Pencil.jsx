import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const Pencil = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_40_127)">
      <Path
        d="M14.1667 2.49993C14.3856 2.28106 14.6455 2.10744 14.9314 1.98899C15.2174 1.87054 15.5239 1.80957 15.8334 1.80957C16.1429 1.80957 16.4494 1.87054 16.7354 1.98899C17.0214 2.10744 17.2812 2.28106 17.5001 2.49993C17.7189 2.7188 17.8926 2.97863 18.011 3.2646C18.1295 3.55057 18.1904 3.85706 18.1904 4.16659C18.1904 4.47612 18.1295 4.78262 18.011 5.06859C17.8926 5.35455 17.7189 5.61439 17.5001 5.83326L6.25008 17.0833L1.66675 18.3333L2.91675 13.7499L14.1667 2.49993Z"
        stroke="#1E1E1E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_40_127">
        <Rect width={20} height={20} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Pencil;
