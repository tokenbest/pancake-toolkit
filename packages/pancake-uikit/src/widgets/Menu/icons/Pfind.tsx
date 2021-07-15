import React from "react";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src='/static/media/src/widgets/Menu/images/pfind.png'  style={{marginRight:'15px'}} width="40" alt="" />
    // <Svg viewBox="0 0 512 512" {...props}>
    //   <path 
    //     d="M401.72,357A217.87,217.87,0,0,0,449.31,221C449.31,99.12,348.53,0,224.65,0S0,99.12,0,221,100.78,442.09,224.65,442.09A225.93,225.93,0,0,0,357.83,399L459.31,502.8a31,31,0,0,0,43.29.8,29.74,29.74,0,0,0,.8-42.61ZM61.29,221c0-88.71,73.28-160.83,163.36-160.83S388,132.33,388,221,314.73,381.87,224.65,381.87,61.29,309.76,61.29,221Z"
    //     fill="#03ffff"
    //    />
    // </Svg>
  );
};

export default Icon;
