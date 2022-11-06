import React from "react";

export const SecondsCounter = (props) => {
  return (
    <>
      <div className="row">
        <div className ="col">{props.mil || 0}</div>
        <div className ="col">{props.centenas || 0}</div>
        <div className ="col">{props.decenas || 0} </div>
        <div className ="col">{props.unidad || 0}</div>
      </div>
    </>
  );
};


