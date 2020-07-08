import React, { useEffect, useState } from "react";

const InputElement = () => {
  
  //const [isLoading, setIsLoading] = useState(true);
  
  // THE BELOW CODE WILL CAUSE AN ERROR ON useState BECAUSE REACT HOOKS CAN NOT BE CALLED INSIDE A CONDITIONAL STATEMENT
  const random_boolean = Math.random() >= 0.5;
  // if (random_boolean === true) {
  //   const [isLoading, setIsLoading] = useState(true);
  // } else {
  //   const [isLoading,setIsLoading] = useState(false);
  // }
  const [isLoading,setIsLoading] = useState(random_boolean === true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  
  //return <div>{random_boolean === true ? "true" : "false"}</div>

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <input placeholder="Enter Some Text" />
  );
};

export default InputElement;
