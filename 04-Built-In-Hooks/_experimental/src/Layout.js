import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

import {Header} from "./Header";
import {Menu} from "./Menu";
import {Footer} from "./Footer";

export class Layout extends React.Component {
    render() {
        const {children} = this.props

        return (
            <React.Fragment>
                <Header/>
                <Menu/>
                {children}
                <Footer/>
            </React.Fragment>
        );
    }
}