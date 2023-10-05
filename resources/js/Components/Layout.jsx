import React from "react";
import Navbar from "./Navbar";
import { Head } from "@inertiajs/react";

const Layout = ({ children, title }) => {
    return (
        <>
            <Head title={title} />
            <Navbar title={title} />
            {children}
        </>
    );
};

export default Layout;
