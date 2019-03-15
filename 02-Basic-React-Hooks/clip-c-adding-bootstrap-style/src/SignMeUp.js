import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useReducer
} from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

//const MemodFuncComponent = React.memo(FunComponent)

//const SignMeUp = ({ signupCallback }) => {
const SignMeUp = React.memo(({ signupCallback }) => {
  useEffect(() => {
    console.log(`SignMeUp:useEffect called`);
  });

  // COMBINE THESE TWO WITH A REDUCER
  // const [email, setEmail] = useState("");
  // const [emailValid, setEmailValid] = useState(false);

  // NEW WITH REDUCER, JUST UPDATE email (not valid yet)
  //https://medium.com/crowdbotics/how-to-use-usereducer-in-react-hooks-for-performance-optimization-ecafca9e7bf5
  // const initialState = '';
  // const reducer = (state, action) => action;
  // const [email, setEmail] = useReducer(reducer, initialState);
  // const [emailValid, setEmailValid] = useState(false);

  const initialState = {
    email: "",
    emailValid: false
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "UpdateEmail":
        return {
          ...state,
          email: action.email,
          emailValid: validateEmail(action.email)
        };
      case "ClearEmail":
        return {
          ...state,
          email: "",
          emailValid: false
        };

      default:
        throw new Error("Unexpected action");
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const [sendProcessing, setSendProcessing] = useState(false);

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const notify = () => {
    // toast.info(`You will be notified of upcoming events ${email}`);
    toast.info(`You will be notified of upcoming events ${state.email}`);
    console.log("SignMeUp:after toast.info");
  };

  function sendEmailToBackend() {
    setSendProcessing(true);
    new Promise(function(resolve) {
      setTimeout(function() {
        setSendProcessing(false);
        //setEmail("");

        resolve();
      }, 2000);
    }).then(() => {
      notify();
      //signupCallback(email);
      signupCallback(state.email);
      dispatch({ type: "ClearEmail" });
    });
  }

  const buttonText = sendProcessing ? "processing..." : "Get Updates";

  return (
    <div className="container">
      <div>
        <ToastContainer />
        <div className="content">
          <input
            //value={email}
            value={state.email}
            onChange={e => {
              dispatch({ type: "UpdateEmail", email: e.target.value });
              // setEmailValid(validateEmail(e.target.value));
              // return setEmail(e.target.value);
            }}
            placeholder="Enter Email"
            type="email"
            name="email"
            required
          />
          &nbsp;
          <button
            // disabled={!emailValid || sendProcessing}
            disabled={!state.emailValid || sendProcessing}
            className="btn"
            onClick={sendEmailToBackend}
            type="submit"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
});

export default SignMeUp;
