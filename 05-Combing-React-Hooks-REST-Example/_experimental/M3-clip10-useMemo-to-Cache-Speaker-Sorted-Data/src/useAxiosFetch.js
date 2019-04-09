import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        hasErrored: false,
        errorMessage: "",
        data: action.payload
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        hasErrored: true,
        errorMessage: "Data Retrieve Failure"
      };
    case "REPLACE_DATA":
      const newData = state.data.map(rec => {
        return rec.id === action.replacerecord.id ? action.replacerecord : rec;
      });
      return {
        ...state,
        isLoading: false,
        hasErrored: false,
        errorMessage: "",
        data: newData
      };
    default:
      throw new Error();
  }
};

const useAxiosFetch = (initialUrl, initialData) => {
  const [url] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    hasErrored: false,
    errorMessage: "",
    data: initialData
  });

  useEffect(() => {
    let didCancel = false;

    // axios.interceptors.response.use(function (response) {
    //   // Do something with response data
    //   debgger;
    //   return response;
    // }, function (error) {
    //   // Do something with response error
    //   debugger;
    //   return Promise.reject(error);
    // });

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        let result = null;
        result = await axios.get(url);

        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (err) {
        // tnis err object does not work well, see interceptor above but no luck with that.
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

  const updateDataRecord = record => {
    debugger;
    // const newData = state.data.map(rec => {
    //   return rec.id === speakerRec.id ? speakerRec : rec;
    // });
    // dispatch({
    //   type: "REPLACE_DATA",
    //   newdata: newData
    // });

    // record must have "id"
    dispatch({
      type: "REPLACE_DATA",
      replacerecord: record
    })
  };

  return { ...state, updateDataRecord };
};

export default useAxiosFetch;
