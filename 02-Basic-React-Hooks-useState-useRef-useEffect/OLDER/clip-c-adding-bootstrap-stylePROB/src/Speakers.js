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
      <div className="container" >
        <h2>Speakers</h2>
      </div>
    </div>
  );
};

export default Speakers;
