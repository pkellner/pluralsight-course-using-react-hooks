import React, { Fragment, useState, useEffect, useReducer } from "react";
import useAxiosFetch from './useAxiosFetch';
//import axios from "axios";

function App() {
  const { data, isLoading, hasErrored, errorMessage, updateDataRecord } = useAxiosFetch(
    "http://localhost:4000/speakers",
    []
  );

  const toggleFavorite = speakerRec => {
    const toggledRec = { ...speakerRec, favorite: !speakerRec.favorite }
    updateDataRecord(toggledRec);
  };

  if (isLoading) return <div>Loading......</div>;

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.firstName} {item.lastName} {item.id}{" "}
            {item.favorite === true ? "TRUE" : "FALSE"}
            <button
              onClick={() => {
                toggleFavorite(item);
              }}
            >
              ClickMe
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;