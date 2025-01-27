import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg/types";

const Img = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  background: url("/images/slices/pinfo.png") no-repeat;
  background-size: 100% 100%;

  &:hover {
    background-image: url("/images/slices/pinfo-hover.png");
  }
`;

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Img />
    // <img src="/images/slices/pinfo.png" width="40" alt="" />

    // <Svg viewBox="0 0 512 512" {...props}>
    //   <path
    //     d="M437,75A255.91,255.91,0,0,0,75,75a255.91,255.91,0,0,0,0,362,255.91,255.91,0,0,0,362,0,255.91,255.91,0,0,0,0-362ZM256,462.3C142.3,462.3,49.7,369.8,49.7,256S142.2,49.7,256,49.7,462.3,142.2,462.3,256,369.7,462.3,256,462.3Z"
    //     fill="#03ffff"
    //   />

    //   <path
    //     d="M280.4,373.8c-12.5-.8-19.9-10.2-12-39.1s20.6-60.8,19.7-85.6-24.6-56.7-97.6-23.5l-4.2,16.7s20.1-9.6,36-3.4.1,49.7-6.2,70.9-20.3,55.8-1.8,75.2,49,14.5,63.5,9.3,26.9-9.7,26.9-9.7l3.4-16.5C307.9,368.1,292.9,374.7,280.4,373.8Z"
    //     fill="#03ffff"
    //   />

    //   <ellipse fill="#03ffff" cx="276.4" cy="148.1" rx="35.5" ry="32.9"/>

    // </Svg>
  );
};

export default Icon;
