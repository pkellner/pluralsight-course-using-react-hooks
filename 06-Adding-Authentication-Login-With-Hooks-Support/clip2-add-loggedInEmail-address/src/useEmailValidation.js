import useInterval from "./useInterval";
import React,{useState,useReducer} from "react";

const useEmailValidation = (secondsFormValidFor) => {
  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const [emailValid, setEmailValid] = useState(false);
  const reducer = (state, action) => {
    state = action;
    setEmailValid(validateEmail(state));
    return action;
  };
  const [email, setEmail] = useReducer(reducer, "");
  const [count, setCount] = useState(secondsFormValidFor);
  useInterval(
    () => {
      setCount(count - 1);
    },
    count > 0 ? 1000 : null
  );

  return { count, email, setEmail, emailValid };

};

export default useEmailValidation