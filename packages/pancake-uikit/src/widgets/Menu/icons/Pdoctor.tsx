import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg/types";

const Img = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  background: url("/images/slices/pdoctor.png") no-repeat;
  background-size: 100% 100%;

  &:hover {
    background-image: url("/images/slices/pdoctor-hover.png");
  }
`;

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Img />
    // <img src="/images/slices/pdoctor.png" style={{ marginRight: "15px" }} width="40" alt="" />

    // <Svg viewBox="0 0 512 512" {...props}>
    //   <path
    //     d="M490.65,131.27C475.55,120,269.63,7.6,260.93,2.8L255.83,0,26,127.28l-.6.3c-15.3,9.89-25,31.09-25.4,55.28-.4,20.9,6.4,39.2,17.7,47.79,3.6,2.7,18.3,11.4,45.1,26.4v84.28c-10.3,11.2-12.9,34.1-9.4,50.09,3.4,15.4,15.2,36.1,20.1,44.29l6,9.9,6-9.9c3.3-5.49,13.5-23,18.4-37.89v21c.2,12.5,4.4,37.49,18.3,51.69,11.2,11.4,40.91,41.49,137.41,41.49,43.71,0,80.31-8.1,105.71-23.4C401.64,466.71,407,435,407,418V279.75l75.21-41.6c25.6-13.89,29.3-41.69,29.7-53C512.75,163,504.15,141.37,490.65,131.27ZM104,280.05v75.48a42,42,0,0,0-6.4-12.7V276.45Zm33.61-33.2,110.7-34.49a14.39,14.39,0,0,0,7.3,2.2c11.1,0,20.2-14.5,20.2-32.3s-9-32.29-20.2-32.29c-4.8,0-9.4,2.7-13,7.6L72.32,210.66c-33.7-18.9-40.1-23.1-41.2-23.9a4.65,4.65,0,0,1-.4-2.4,14.21,14.21,0,0,1,6.1-11.19l219-121.28c58.61,32,210.62,115.48,221.52,123.68,2.6,2,4,5.29,3.9,6.89,0,1.4-2.4,5.8-9.1,9.4L255.73,311.74C215.33,289.54,173.53,266.65,137.63,246.85ZM259.83,463c-87.4,0-111.6-24.6-120.8-33.79-3.5-3.6-4.1-10.7-4.2-12V297c52.6,29,105.8,58,116,63.59l5.1,2.8,120.51-66.79V417.92c0,2.4-3.7,13.9-22.1,24.89C339.14,452,310.34,463,259.83,463Z"
    //     fill="#03ffff"
    //     transform="translate(0)"
    //    />
    // </Svg>
  );
};

export default Icon;
