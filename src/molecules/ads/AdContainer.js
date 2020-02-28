import React from "react";


const AdContainer = (props) => {

  return (
    <div className={"px-4 mx-2"} style={{ backgroundColor: "#fefefe", paddingBottom: "125px", minHeight: "100vh" }}>
      {props.child}
    </div>
  )
}

export default AdContainer;