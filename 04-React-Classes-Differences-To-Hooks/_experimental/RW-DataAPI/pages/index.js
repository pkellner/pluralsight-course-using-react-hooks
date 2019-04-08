import React, { Fragment, useState, useEffect, useReducer } from "react";
import axios from "axios";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case "REPLACE_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.newdata
      };
    default:
      throw new Error();
  }
};

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const result = await axios(url);

        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  const updateDataRecord = speakerRec => {
    const newData = state.data.map(rec => {
      return rec.id === speakerRec.id
        ? { ...speakerRec, favorite: !speakerRec.favorite }
        : rec;
    });
    dispatch({
      type: "REPLACE_DATA",
      newdata: newData
    });
  };

  return { ...state, updateDataRecord };
};

function App() {
  const { data, isLoading, isError, updateDataRecord } = useDataApi(
    "http://localhost:4000/speakers",
    []
  );

  const doUpdateDataRecord = rec => {
    updateDataRecord(rec);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.firstName} {item.lastName} {item.id}{" "}
            {item.favorite === true ? "TRUE" : "FALSE"}
            <button
              onClick={() => {
                doUpdateDataRecord(item);
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