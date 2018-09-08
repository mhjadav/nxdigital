import React, { Component } from "react";
import Footer from '../components/footer';
import ImportScripts from '../components/importScripts';
import Header from "../components/header";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            {props.children}
            <Footer />
            <ImportScripts />
        </React.Fragment>
    );
}

export default Layout;
