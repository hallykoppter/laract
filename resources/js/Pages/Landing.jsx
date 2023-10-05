import React from "react";
import { Head } from "@inertiajs/react";
import Layout from "../Components/Layout";

const Landing = () => {
    return (
        <div className="flex justify-center content-center text-3xl">
            Dashboard
        </div>
    );
};

Landing.layout = (page) => <Layout children={page} title="Home" />;

export default Landing;
