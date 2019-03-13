import React, { useState, useEffect, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import { Header } from "../src/Header";
import { Menu } from "../src/Menu";

const Speakers = ({}) => {


  return (
    <div>
      <Header></Header>
      <Menu />
        <div className="container">
            <div className="row">
                <div className="col margintopbottom">
                    <h2>Speakers</h2>
                    <h6 className="margintopbottom20">
                        Code Camp has the best speakers from the around the world.
                    </h6>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Speakers;
