import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg/types";

const Img = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  background: url("/images/slices/pstart.png") no-repeat;
  background-size: 100% 100%;

  &:hover {
    background-image: url("/images/slices/pstart-hover.png");
  }
`;

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Img />
    // <img src="/images/slices/pstart.png" style={{ marginRight: "15px" }} width="40" alt="" />
    // <Svg viewBox="0 0 512 512" {...props}>
    //   <path
    //     d="M491.63,161.84H336.91L274.24,12.5a19.78,19.78,0,0,0-36.78,0L174.79,161.84H20.07A20.14,20.14,0,0,0,1.08,176a21.21,21.21,0,0,0,6.79,23.19L135.71,300.28,65.44,483.41a21.37,21.37,0,0,0,6.4,24.19,19.37,19.37,0,0,0,24.09.3L256,385.65,416,507.9a19.52,19.52,0,0,0,24.19-.2,21.33,21.33,0,0,0,6.4-24.19L376.29,300.38,504.13,199.32a21.21,21.21,0,0,0,6.79-23.19C507.83,167.43,500.23,161.84,491.63,161.84Zm-152,114.85a21.35,21.35,0,0,0-6.5,24.29l50,130.15L267.64,342.87a19.29,19.29,0,0,0-23.78,0L128.41,431.13l50-130.15a21.35,21.35,0,0,0-6.5-24.29L79.24,203.42H187.78a20,20,0,0,0,18.39-12.49L255.75,72.87l49.58,118.06a20,20,0,0,0,18.39,12.49H432.26Z"
    //     fill="#03ffff"
    //     transform="translate(0)"
    //    />
    // </Svg>
  );
};

export default Icon;
