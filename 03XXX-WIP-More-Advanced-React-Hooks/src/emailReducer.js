const emailReducer = (state, action) => {
  function validateEmail(email) {
    console.log("emailReducer:validateEmail:" + email);
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  console.log("emailReducer:" + action.type);
  switch (action.type) {
    case "setEmail": {
      return {
        ...state,
        email: action.email,
        emailValid: validateEmail(action.email)
      };
    }
    // case 'decrement': return state - 1;
    // case 'reset': return 0;
    default:
      throw new Error("Unexpected action");
  }
};
export default emailReducer;
