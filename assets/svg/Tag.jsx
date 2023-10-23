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
      d="M0.00393773 0.8238L18.3354 0.296895C19.0254 0.277062 19.5275 0.945748 19.3161 1.60285L17.091 8.51606C16.6589 9.85886 16.7136 11.311 17.2457 12.6174L19.778 18.8351C20.0412 19.4814 19.5782 20.1918 18.8806 20.2119L0.237218 20.7477L0.00393773 0.8238Z"
      fill="#1167B1"
    />
  </Svg>
);
export default Tag;
