import React from "react";

function Alert(props) {
    const capatalize=(word)=>{
        let str=word.toLowerCase();
        return str.charAt(0).toUpperCase()+str.slice(1)
    }
  return (
    
    props.alert&&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capatalize(props.alert.type)}</strong>: {props.alert.msg}
      
    </div>
  );
}

export default Alert;
