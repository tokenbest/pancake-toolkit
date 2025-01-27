import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg/types";

const Img = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  background: url("/images/slices/pbag.png") no-repeat;
  background-size: 100% 100%;

  &:hover {
    background-image: url("/images/slices/pbag-hover.png");
  }
`;

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Img />
    // <img src='/images/slices/pbag.png'  style={{marginRight:'15px'}} width="40" alt="" />

    // <Svg viewBox="0 0 512 512" {...props}>
    //   <path
    //     d="M423,107H375.5V92.8c0-46.9-19.6-69.8-36-80.9A69.61,69.61,0,0,0,303.2,0H217.9C190.6,0,174.1,13.1,165,24.2,143,51,143.4,89.4,143.8,97.1v10H88.9C39.9,107.1,0,152.5,0,208.3V410.8C0,466.6,39.9,512,88.9,512H423.1c49,0,88.9-45.4,88.9-101.2V208.3C511.9,152.4,472,107,423,107Zm-52.2,48.3V463.7H143.9V155.3ZM186.1,94.8c-.3-6.9.9-26.9,9.9-37.8,4.9-5.9,12-8.7,21.8-8.7h85.3a32.35,32.35,0,0,1,14.8,5.2C328.1,60.3,333,73.2,333,92.8V107H186.1V96.4A4.3,4.3,0,0,0,186.1,94.8ZM42.3,410.7V208.2c0-29.2,20.9-52.9,46.5-52.9h12.6V463.7H88.8C63.2,463.7,42.3,439.9,42.3,410.7Zm427.2,0c0,29.2-20.9,52.9-46.5,52.9h-9.8V155.2H423c25.6,0,46.5,23.7,46.5,52.9Z"
    //     fill="#03ffff"
    //    />
    // </Svg>
  );
};

export default Icon;
