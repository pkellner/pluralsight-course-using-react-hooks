import React, { useEffect, useState } from 'react';

const InputElement = () => {
  const random_boolean = Math.random() >= 0.5;
  //const [isLoading,setIsLoading] = useState(true);

  // (this will cause a random warning in console debug messages because server-side and client side both have random
  //   number generation.  Just ignore the error as it does not effect the point we are making here with the React hooks rule).
  //     Warning: Expected server HTML to contain a matching <input> in <div>.
  const [isLoading, setIsLoading] = useState(random_boolean === true);

  // if (random_boolean === true) {
  //   const [isLoading,setIsLoading] = useState(true);
  // } else {
  //   const [isLoading,setIsLoading] = useState(false);
  // }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <input placeholder="Enter Some Text" />
    </div>
  );
};

export default InputElement;
