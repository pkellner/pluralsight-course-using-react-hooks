import React, { useEffect, useState } from "react";

const InputElement = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  
  // THE BELOW CODE WILL CAUSE AN ERROR ON useState BECAUSE REACT HOOKS CAN NOT BE CALLED INSIDE A CONDITIONAL STATEMENT
  // if (new Date() == "now") {
  //   const [isLoading, setIsLoading] = useState(true);
  // }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <input placeholder="Enter Some Text" />
  );
};

export default InputElement;
