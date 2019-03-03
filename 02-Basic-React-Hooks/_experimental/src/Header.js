import React, { useContext, Component } from "react";
import svccImg from "../static/SVCClogo.png";
import SignMeUp from "./SignMeUp";
import {ConfigContext} from "./App";

export const Header = () => {
  const context = useContext(ConfigContext);
  return (
    <div className="jumbotron jumbotronheight">
      <div className="row">
        <div className="col-12 col-sm-4 text-center">
          <h6 className="text-uppercase">October 19-20&nbsp;&nbsp;2019</h6>
          <h6 className="text-uppercase">San Jose, California</h6>
        </div>
        <div className="col-12 col-sm-8 text-lg-right">
          <div>
            <img src={svccImg} />
          </div>
          <h2>Silicon Valley Code Camp 2019</h2>
        </div>
      </div>
      <div className="row col-12 text-right">
        {context.showSignMeUp ? <SignMeUp/> : null}
      </div>
    </div>
  );
};



