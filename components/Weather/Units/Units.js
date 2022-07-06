const units = props => {
    let checkUnits = null;
    if (props.flags === "us") {
      checkUnits = "°F";
    } else if (props.flags === "si") {
      checkUnits = "°C";
    }
  
    return checkUnits;
  };
  
  export default units;