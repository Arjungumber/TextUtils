import React from "react";

export default function Alert(props) {
  const Capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    // height is given so that when it is revoked there must not be any layout shift like we earlier saw, now it has given its own area.
    <div style={{height:'50px'}}>  
    {/* // template literal to get the correct class type based on alert type */}
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert">
        <strong> {Capitalize(props.alert.type)}</strong> : {props.alert.msg}
      </div>}
    </div>
  );
}
// ye upper props.alert && isliye dalna pada kyuki initially props.alert humne null set kiya hua hai, so it was not rendering our
// whole page so props.alert &&
