import React from 'react';
import styled from 'styled-components'


const CallToActionButton = styled.button`
text-align: center;
color: #222;
background-color: #38a9ff;
border: none;
padding: 1rem;
text-transform: uppercase;
letter-spacing: 5px;
font-weight: 600;
`;


const CallToAction = (props) => {
  function Cta() {
    props.history.push('/new');
  }

  return (
    <CallToActionButton onClick={Cta}>Advertise Now!</CallToActionButton >
  )
}


export default CallToAction;