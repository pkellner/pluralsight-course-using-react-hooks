import React, {useState} from "react";

function jason1(props) {
  const [option, setOption] = useState("foo");
  // const handleOptionChange = useCallback(event => {
  //   setOption(event.target.value);
  // });

  return (
    <div>
      <input
        onChange={e => setOption(e.target.value)}
        placeholder="Enter Value"
      />
      <span>{option}</span>
    </div>
  );
}

export default jason1;
