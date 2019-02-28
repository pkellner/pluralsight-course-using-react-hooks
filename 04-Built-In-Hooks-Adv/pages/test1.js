import React, { useCallback } from "react";

function Test(props) {
  function doSomething(a, b) {
    console.log("doSomething called");
    return a + b;
  }

  const memoizedCallback = useCallback(
      (a,b) => {
        doSomething(a, b);
      },
      [a, b]
  );

  return (
      <div>
        {Array.from({ length: 3 }).map(() => (
            <div>{memoizedCallback("aaa", "bbb")}</div>
        ))}
      </div>
  );
}

export default Test;
