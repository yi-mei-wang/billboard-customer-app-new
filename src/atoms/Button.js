import styled from 'styled-components';
import React from "react";

import { ReactComponent as Loader } from "../images/rolling.svg";

const Button = styled.button`
text-align: center;
color: #222;
background-color: ${props => props.enabled ? "#d79922" : "grey"};
border: none;
width: 150px;
height: 40px;
`;

const ButtonWithLoader = props => (
  <Button
    onClick={() => {
      props.handleClick();
    }}
    enabled={props.enabled}>
    {props.text}
    {props.loading && <Loader />}
  </Button>
);

export { Button, ButtonWithLoader };