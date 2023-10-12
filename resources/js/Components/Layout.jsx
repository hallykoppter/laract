import React from "react";
import Navbar from "./Navbar";
import { Head } from "@inertiajs/react";

const Layout = ({ children, title }) => {
    return (
        <>
            <Head title={title} />
            <div className="min-h-screen flex flex-col ">
                <Navbar title={title} />
                <div className="grow flex flex-col justify-center items-center ">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
