import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Book = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox="0 0 50 50"
    fill="none"
    {...props}
  >
    <Path
      d="M8.33325 40.625C8.33325 39.2436 8.88199 37.9189 9.85874 36.9421C10.8355 35.9654 12.1602 35.4166 13.5416 35.4166H41.6666"
      stroke="#1E1E1E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.5416 4.16663H41.6666V45.8333H13.5416C12.1602 45.8333 10.8355 45.2846 9.85874 44.3078C8.88199 43.3311 8.33325 42.0063 8.33325 40.625V9.37496C8.33325 7.99362 8.88199 6.66886 9.85874 5.69211C10.8355 4.71536 12.1602 4.16663 13.5416 4.16663Z"
      stroke="#1E1E1E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Book;
