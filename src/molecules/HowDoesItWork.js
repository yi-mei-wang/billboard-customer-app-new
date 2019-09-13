import React from 'react';
import styled from 'styled-components';

import { ReactComponent as AISvg } from "../images/ai.svg";
import { ReactComponent as ConfirmedOrderSvg } from "../images/confirmed_order.svg";
import { ReactComponent as MobileSvg } from "../images/mobile.svg";
import { ReactComponent as UploadingSvg } from "../images/uploading.svg";

const Img = styled.img`
  width: 260px;
`;

const HowDoesItWork = () => (
  <>
    <div style={{ "backgroundColor": "#fefefe" }} className="p-3">
      <h5>How does it work?</h5>
      <h6>Upload your images anywhere</h6>
      <AISvg />
    </div>
  </>
)


export default HowDoesItWork;