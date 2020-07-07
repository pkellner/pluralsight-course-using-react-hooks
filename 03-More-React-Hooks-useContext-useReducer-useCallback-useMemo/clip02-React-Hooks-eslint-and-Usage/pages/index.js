import React, { useEffect, useState } from "react";

const InputElement = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  
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
