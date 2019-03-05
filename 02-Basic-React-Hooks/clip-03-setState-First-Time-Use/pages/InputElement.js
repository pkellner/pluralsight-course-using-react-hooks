import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");

  const [historyList, setHistoryList] = useState([]);

  return (
    <div className="container">
      <h2>State Updates</h2>
      <ul className="list-group">
        <div className="list-group-item">
          <input
            placeholder="Enter Some Text"
            onChange={e => {
              const newValue = e.target.value;
              setHistoryList([...historyList, newValue]);
              setInputText(newValue);
            }}
          />
        </div>

        <div className="list-group-item">inputText: {inputText}</div>
      </ul>
      <h2>State Updates</h2>
      <ul className="list-group">
        {historyList.map(function(rec) {
          return <div className="list-group-item">{rec}</div>;
        })}
      </ul>
    </div>
  );
};

export default InputElement;
