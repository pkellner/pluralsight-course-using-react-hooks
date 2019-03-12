import ReactDOM from "react-dom";

import React, {
  useRef,
  useMemo,
  useEffect,
  useState,
  useCallback
} from "react";

const Child = React.memo(({ onClick, suffix }) => {
  const numRendersRef = useRef(1);
  useEffect(() => {
    numRendersRef.current++;
  });

  return (
    <div onClick={() => onClick(suffix)}>
      Click Me to log a and {suffix} and change b. Number of Renders:{" "}
      {numRendersRef.current}
    </div>
  );
});
function App(props) {
  const [a, setA] = useState("aaa");
  const [b, setB] = useState("bbb");

  const computeSomethingExpensiveBasedOnA = () => {
    console.log("recomputing expensive thing", a);
    return a + b;
  };
  const somethingExpensiveBasedOnA = computeSomethingExpensiveBasedOnA();
  const memoizedSomethingExpensiveBasedOnA = useMemo(
    () => computeSomethingExpensiveBasedOnA(),
    [a]
  );
  const nonMemoizedCallback = function (suffix) {
      console.log(a + suffix);
      setB(prev => prev + "b");
  };
  const memoizedCallback = useCallback(nonMemoizedCallback, [a]);
  const memoizedCallbackUsingMemo = useMemo(() => nonMemoizedCallback, [a]);
  return (
    <div>
      A: {a}
      <br />
      B: {b}
      <br />
      nonMemoizedCallback === memoizedCallback:{" "}
      {String(nonMemoizedCallback === memoizedCallback)}
      <br />
      somethingExpensiveBasedOnA: {somethingExpensiveBasedOnA}
      <br />
      memoizedSomethingExpensiveBasedOnA: {memoizedSomethingExpensiveBasedOnA}
      <br />
      <br />
      <div onClick={() => setA(a + "a")}>Click Me to change a</div>
      <br />
      <Child onClick={nonMemoizedCallback} suffix="1" />
      <Child onClick={memoizedCallback} suffix="2" />
      <Child onClick={memoizedCallbackUsingMemo} suffix="3" />
    </div>
  );
}

function so(props) {
  return <App />;
}

so.propTypes = {};
so.defaultProps = {};

export default so;
