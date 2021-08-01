import React from "react";
import styled from "styled-components";
import { SvgProps } from "../types";

const Img = styled.div`
  width: 40px;
  height: 40px;
  /* margin-right: 15px; */
  background: url("/images/slices/pemail.png") no-repeat;
  background-size: 100% 100%;

  &:hover {
    background-image: url("/images/slices/pemail-hover.png");
  }
`;

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Img />
    // <img src="/images/slices/pemail.png" width="40" alt="" />

    // <Svg viewBox="0 0 512 512" {...props}>
    //   <path
    //     d="M419.28,0H92.72C41.61,0,0,54.91,0,122.42V389.58C0,457.09,41.61,512,92.72,512H419.28C470.39,512,512,457.09,512,389.58V122.52C512.1,54.91,470.49,0,419.28,0Zm0,58h.2l-163.43,203L92.52,58H419.28Zm41.21,331.67c0,30-18.5,64.91-41.21,64.91H92.72c-22.71,0-41.21-34.91-41.21-64.91V122.52a73.42,73.42,0,0,1,.8-10.6L238.85,332.16c4.9,5.81,11,8.71,17.2,8.71s12.3-2.9,17.2-8.71L459.79,111.92a73.74,73.74,0,0,1,.8,10.7V389.68Z"
    //     fill="#03ffff"
    //    />
    // </Svg>
  );
};

export default Icon;
