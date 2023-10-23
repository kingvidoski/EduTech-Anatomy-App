import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";

const Book = (props) => (
  <Svg
    width={38}
    height={38}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={38} height={38} fill="url(#pattern0)" />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_16_84" transform="scale(0.0111111)" />
      </Pattern>
      <Image
        id="image0_16_84"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFS0lEQVR4nO2dXWgcVRTHR2taRZu5Z2JFRKn4ICr4oqgIgrV+POmDQh76FEyac3ajQfqkVjQtKFgQFYsP8QOK6IOLZs/ZxtQPaMC2CrUogj5oaf2IH30wCQh+VCyRMzO2sWY3k3X2zu56fnDf5s4958fdnTsL+ScIDMMwDMMwDMMwDMMw/g/0V1Y75B2O5AcgWXAkPwPynCM+BshHkiEfA8ohR3LAIb8LJK8ByrMOZWuIfK8ryZ0RTVwP5eolwejUmqDNWD8wfbbWFiHfoLXGNaNs1R60F+1Je9Mek16TvlMHc7ETdYPyvSN+Up2tuAidqDfJbaCcAOKjjngPED8DyKWwJBv7BvmioMXoGrqWrhlvhKSGo0lN+fUYy14pf+9kH8Mh/wjIuwHlQcDaTbrTmrY6Nn1WWK5e64gfAORXAOUrn32suF5fxcHSO+M3h/K2I7k/pOqly9Wq1+i1jvgdnVtk7R0lGv4lXg5EJEOLd/rFWyrnAFY3O+IPiq6va0TDKeEzQFXS4ZC/K7qelooOsXYNYO3GaJhvC1HuAZJNgIIR8RZH8nDyoJNXAWXaoXwOJLNFN59hzKa17tXaHcrTgPyQ9qS9aY/aq/asvccOWi06aIbRqTVuZHJ9iLVbAaV88smfHBFzffIvOXSN5Fi2Jz66oZS1Fq2p2WNne4puQDQ61RuR3O6IH3PEU0Ayn4PceYfylkN5VO+tawQ5k48fHO/xJXrJ4xlVNzjipwD5y6xyHckXOkfn6j2CFlPXD473ZLrBupHJC+O3oaJEn4a+WTrklxoIflGvCTxTtx7k/eqw8Wwc79ELG+2coCCgQ+pJZX/Y8Ls/OTo1/oh67WYRnVLPqcHDdSdnOfwHBQEdUs/ir5D6k5HnTHQ2MjygZ//L5LbbQUGb1ZOpNhOdHRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPtCRPdLaLjxCySvRrJ4EgqQLwLkJ8HlO0OZTTJttC4iOrVYXkSWt1YkBNaa1yz1k6yKe4FZXvcG/Eu7TUJvYozPQ61XvQKh0aWOeLPNNYBkHfGWRkl2bj8H6Znq20l99A1k7QwzQzhnXHUhNaWxqrlPbyKXmbMO5L3gGSbw+pdvUOVKC/R60Yq52nimKaFpbvxmO/+6op2KL8WIHvh5EA5ke7+F0Liu1VWVtF6rcbx6Fy9h5dkmwbDEf9Sf0cjf1qoaDpdPP8eR6wl3/1LN4QyqtfotYXX+8/xSf0dTfxIGxS40A1Dozfriu4b5LVxlGQbFAqdPJCPqMugERHxVUD8TeHFUocO5K+j8sSVQdYzZZq0O1N44dQZQwMPNQQ2HKi6oBn0yHX+5onL+4Zr12nAXoTSr1GVSWCrRhjz60C8D5APA8nxohuG/MbxOCsPeb9DfgOIn0sjj1EdRFi7Q+OQdfeuvW+iL/DK2NiZSZAg3xLnhsafCp5yKN+27U4kmYnfcpF3aA6SvtDEwbP9lVVBJxIOVJ0brt0cx2omEcY/eRerayLvjoPEqbohz58I2piFM/qwdkWaQv5y+tWTs1g+rPfWNXQtXbPortuCsDx5WfrKrK/lfzQh98/0B59tGtZddD8dQe9QJQKUx7NL5ica/VZiNKK/sgpIPlr+gcYHO/bh1S70DlWiRjGeKvnc0psXFF1nd9BfWa0PNEB5Pzk56ImF90UlHmzqX3IYhmEYhmEE3cpfK/UMtebpd3MAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
export default Book;
