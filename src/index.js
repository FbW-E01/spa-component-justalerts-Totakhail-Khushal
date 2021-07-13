import React from "react";
import ReactDOM from "react-dom";

const Box = (props) => {
  // console.log(props);

  if (props.hide === true){
    return null;
  }

  let type;
  switch (props.type){
    case "red":
      type="danger"
    break;
    case"orange":
      type= "warning";
      break;
    default:
      type ="primary"
  }

 
    return( 
    <div className={`alert alert-${type}`} role="alert">
      {props.message}
    </div>
    );
 
};





// const Box = (props) => {
//   return(
//     <div className={`alert alert-${
//       props.type === 'blue' ? "primary"
//       :
//       props.type === 'red' ? "danger"
//       :
//       props.type === 'orange' ? "warning" : null
//     }`}>
//         <p>
//         {props.message}
//         </p>
//     </div>
//   )};





// Do not edit below this line
const jsx = <>
  <Box type="blue" message="Blue box" />
  <Box type="red" message="Red box" />
  <Box type="orange" message="Orange box" />
  <Box hide type="red" message="Hidden box" />
</>;
const element = document.getElementById("target");

ReactDOM.render(jsx, element);
