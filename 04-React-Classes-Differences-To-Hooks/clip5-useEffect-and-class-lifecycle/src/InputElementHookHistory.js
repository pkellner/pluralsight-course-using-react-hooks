import React, { useState } from "react";

const InputElementHookHistory = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  return (
    <div>
      <input
        onChange={e => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter Some Text"
      />
      <br />
      {inputText}
      <hr />
      <br />
      <ul>
        {historyList.map((rec,index) => {
          return <div key={index}>{rec}</div>;
        })}
      </ul>
    </div>
  );
};

export default InputElementHookHistory;
