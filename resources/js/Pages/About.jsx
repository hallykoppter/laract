import React from "react";
import Layout from "../Components/Layout";

const About = () => {
    return (
        <div className="flex justify-center content-center text-3xl">
            Ini Halaman About
        </div>
    );
};

About.layout = (page) => <Layout children={page} title="About" />;

export default About;
