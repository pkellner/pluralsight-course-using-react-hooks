import React, {useState} from "react";

const Hooks1 = () => {

    const [inputText,setInputText] = useState("");

    return <div><input
        onChange={(e) => {
            setInputText(e.target.value);
        }}
        placeholder="Enter Some Text"/><br/>
        {inputText}
    </div>
};

export default Hooks1;
