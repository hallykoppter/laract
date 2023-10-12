import React from "react";
import Layout from "../Components/Layout";

const Landing = () => {
    return (
        <div className="flex flex-row justify-center content-center text-3xl">
            <BigLogo />
        </div>
    );
};

Landing.layout = (page) => <Layout children={page} title="Home" />;

function Card() {
    return (
        <div className="w-80 h-80 hover:scale-110 bg-white flex justify-center item-center mx-5">
            Card
        </div>
    );
}

function BigLogo() {
    return (
        <img
            className="my-auto mx-auto max-w-xs"
            src="/img/HALLYKOPPTER - TRANSPARENT.png"
            alt="Big - Logo"
        ></img>
    );
}

export default Landing;
