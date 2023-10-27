import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Model = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={55}
    viewBox="0 0 50 55"
    fill="none"
    {...props}
  >
    <G filter="url(#filter0_d_7_369)">
      <Path
        d="M45 35.6619V16.9952C44.9992 16.1769 44.7831 15.3731 44.3736 14.6646C43.964 13.9561 43.3754 13.3677 42.6667 12.9585L26.3333 3.62521C25.6239 3.21563 24.8192 3 24 3C23.1808 3 22.3761 3.21563 21.6667 3.62521L5.33333 12.9585C4.62461 13.3677 4.03595 13.9561 3.62641 14.6646C3.21687 15.3731 3.00084 16.1769 3 16.9952V35.6619C3.00084 36.4802 3.21687 37.284 3.62641 37.9925C4.03595 38.701 4.62461 39.2894 5.33333 39.6986L21.6667 49.0319C22.3761 49.4415 23.1808 49.6571 24 49.6571C24.8192 49.6571 25.6239 49.4415 26.3333 49.0319L42.6667 39.6986C43.3754 39.2894 43.964 38.701 44.3736 37.9925C44.7831 37.284 44.9992 36.4802 45 35.6619Z"
        stroke="#1E1E1E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.63013 14.5692L24.0001 26.3526L44.3701 14.5692"
        stroke="#1E1E1E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default Model;
