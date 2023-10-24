import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Tag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="none"
    {...props}
  >
    <Path
      d="M0.00393773 0.823861L18.3354 0.296956C19.0254 0.277123 19.5275 0.94581 19.3161 1.60292L17.091 8.51612C16.6589 9.85892 16.7136 11.3111 17.2457 12.6175L19.778 18.8351C20.0412 19.4815 19.5782 20.1919 18.8806 20.2119L0.237218 20.7478L0.00393773 0.823861Z"
      fill="#1E1E1E"
    />
  </Svg>
);
export default Tag;
