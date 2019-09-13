import React from "react";
import styled from "styled-components";


const Calltoaction = styled.div`
color: #fff;
padding: 1.5rem;
padding-right: 50px;
background-color: white;
`;

const Heading = styled.h1`
background-color: #3b4158;
display: inline-block;
`;

const Subheading = styled.h4`
background-color: #fcfcfc;
color: #3b4158;
display: inline-block;
`;

const CallToAction = () => (
  <Calltoaction>
    <Heading className="my-1 p-2">Advertising </Heading>
    <Heading className="p-2">made easy.</Heading>
    <Subheading className="my-2 p-2">Reach out to your customers now.</Subheading>
  </Calltoaction>
)


export default CallToAction;